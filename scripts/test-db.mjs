import {PGlite} from '@electric-sql/pglite';
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
const db=new PGlite();let checks=0;
await db.exec(`create role anon; create role authenticated; create schema auth; create table auth.users(id uuid primary key); create function auth.uid() returns uuid language sql as $$select nullif(current_setting('test.user_id',true),'')::uuid$$; create schema realtime; create function realtime.send(jsonb,text,text,boolean) returns void language sql as $$select$$;`);
await db.exec(await readFile('supabase/migrations/001_interview.sql','utf8'));
const host=randomUUID(),stranger=randomUUID();await db.query('insert into auth.users values ($1),($2)',[host,stranger]);await db.query('insert into public.interview_admins values ($1)',[host]);
async function user(id){await db.query("select set_config('test.user_id',$1,false)",[id]);}
async function call(name,args=[],role='authenticated'){await db.exec(`set role ${role}`);try{const r=await db.query(`select public.${name}(${args.map((_,i)=>'$'+(i+1)).join(',')}) as value`,args);return r.rows[0]?.value;}finally{await db.exec('reset role');}}
async function rejects(fn,pattern){await assert.rejects(fn,pattern);checks++;}
function check(condition,message){assert.ok(condition,message);checks++;}
await user(stranger);await rejects(()=>call('interview_create',['intruder','live']),/ADMIN_REQUIRED/);
await user(host);
let e=await call('interview_create',['DB correctness test','rehearsal']);check(e.mode==='rehearsal','rehearsal mode');
const c=e.code;const first=randomUUID();await call('interview_join',[c,first],'anon');
await call('interview_join',[c,first],'anon');
const lobby=await call('interview_snapshot',[c],'anon');check(lobby.joined===1&&lobby.vote_status==='idle','repeat lobby entry counts once before voting');
await rejects(()=>call('interview_vote',[c,first,e.round,1,randomUUID()],'anon'),/VOTING_CLOSED/);
await rejects(()=>call('interview_control',[c,e.control_version,'start',{}],'anon'),/permission denied/);
await user(stranger);await rejects(()=>call('interview_control',[c,e.control_version,'start',{}]),/ADMIN_REQUIRED/);await user(host);
e=await call('interview_control',[c,e.control_version,'start',{}]);
const request=randomUUID();const one=await call('interview_vote',[c,first,e.round,1,request],'anon');check(one.accepted,'first vote');
for(let i=0;i<10;i++) {const repeat=await call('interview_vote',[c,first,e.round,5,request],'anon');check(repeat.choice===1&&repeat.duplicate,'original result on retry');}
const expected=[0,1,0,0,0,0];
for(let i=1;i<100;i++){const id=randomUUID();await call('interview_join',[c,id],'anon');await call('interview_vote',[c,id,e.round,i%6,randomUUID()],'anon');expected[i%6]++;}
e=await call('interview_snapshot',[c],'anon');assert.deepEqual(e.counts,expected);checks++;
check(e.counts.reduce((a,b)=>a+b,0)===100,'exact 100 votes');
const counts=await db.query('select count(*)::int n from public.interview_votes');check(counts.rows[0].n===100,'100 stored unique votes');
await db.exec('set role anon');await rejects(()=>db.exec('select * from public.interview_votes'),/permission denied/);await rejects(()=>db.exec('update public.interview_events set counts=array[9,9,9,9,9,9]'),/permission denied/);await db.exec('reset role');
await rejects(()=>call('interview_control',[c,0,'close',{}]),/STATE_CHANGED/);
e=await call('interview_control',[c,e.control_version,'close',{}]);const late=randomUUID();await call('interview_join',[c,late],'anon');
await rejects(()=>call('interview_vote',[c,late,e.round,0,randomUUID()],'anon'),/VOTING_CLOSED/);
const afterClose=await call('interview_vote',[c,first,e.round,4,request],'anon');check(afterClose.duplicate&&afterClose.choice===1,'retry after close');
await rejects(()=>call('interview_control',[c,e.control_version,'stage',{stage:5}]),/SELECT_WINNER_FIRST/);
const cats=['lesson','homework','game','letter','meeting','speaking'];const w=cats[e.counts.indexOf(Math.max(...e.counts))];
await rejects(()=>call('interview_control',[c,e.control_version,'select',{winner:w,result_id:'lesson_99',remark_id:`${w}_01`}]),/INVALID_CONTENT/);
e=await call('interview_control',[c,e.control_version,'select',{winner:w,result_id:`${w}_01`,remark_id:`${w}_01`}]);
e=await call('interview_control',[c,e.control_version,'stage',{stage:9}]);check(e.used_results.includes(`${w}_01`),'result tracked');
await call('interview_cue',[c,e.stage_seq,{id:'intro',language:'ko',duration:2,started_at:0,playing:true}]);
const staleSeq=e.stage_seq;e=await call('interview_control',[c,e.control_version,'stage',{stage:10}]);await call('interview_cue',[c,staleSeq,{id:'intro',language:'ko'}]);e=await call('interview_snapshot',[c],'anon');check(e.cue===null,'stale audio discarded');
const before=e.round;e=await call('interview_control',[c,e.control_version,'reset',{}]);check(e.round===before+1&&e.counts.every(x=>x===0),'reset increments round');
e=await call('interview_control',[c,e.control_version,'start',{}]);await rejects(()=>call('interview_vote',[c,first,before,1,randomUUID()],'anon'),/ROUND_CHANGED/);
await call('interview_vote',[c,first,e.round,2,randomUUID()],'anon');
const live=await call('interview_create',['Live separation test','live']);check(live.counts.every(x=>x===0)&&live.code!==c,'rehearsal and live separate');
await db.exec(`create or replace function realtime.send(jsonb,text,text,boolean) returns void language plpgsql as $$begin raise exception 'broadcast unavailable';end$$;`);
const offlineVoter=randomUUID();await call('interview_join',[c,offlineVoter],'anon');await call('interview_vote',[c,offlineVoter,e.round,2,randomUUID()],'anon');
const recovered=await call('interview_snapshot',[c],'anon');check(recovered.counts[2]===2,'broadcast failure does not roll back vote');
await call('interview_control',[c,recovered.control_version,'end',{}]);await rejects(()=>call('interview_join',[c,randomUUID()],'anon'),/EVENT_ENDED/);
console.log(`PASS: ${checks} database assertions. Real migration executed in embedded PostgreSQL (PGlite); Auth and Realtime are stubs. 100 unique votes, retry/close/reset/permissions checked. This is NOT an external concurrent Supabase load test.`);
await db.close();

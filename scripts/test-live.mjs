// Requires an isolated rehearsal event and test host login; NEVER run against a live event.
import {createClient} from '@supabase/supabase-js';
import {randomUUID} from 'node:crypto';
import assert from 'node:assert/strict';
const {TEST_SUPABASE_URL:url,TEST_SUPABASE_ANON_KEY:key,TEST_HOST_EMAIL:email,TEST_HOST_PASSWORD:password}=process.env;
if(!url||!key||!email||!password){console.error('NOT RUN: Set TEST_SUPABASE_URL, TEST_SUPABASE_ANON_KEY, TEST_HOST_EMAIL, TEST_HOST_PASSWORD in your shell. No secrets are logged.');process.exit(2);}
const host=createClient(url,key,{auth:{persistSession:false}}),anon=createClient(url,key,{auth:{persistSession:false}});
const auth=await host.auth.signInWithPassword({email,password});if(auth.error)throw Error('Test host authentication failed');
async function rpc(client,name,args){const {data,error}=await client.rpc(name,args);if(error)throw Error(error.message);return data;}
for(const size of [30,50,100]){
 let e=await rpc(host,'interview_create',{p_title:`자동 부하 리허설 ${size}명`,p_mode:'rehearsal'});const voters=Array.from({length:size},()=>({voter:randomUUID(),request:randomUUID()}));
 try{await Promise.all(voters.map(v=>rpc(anon,'interview_join',{p_code:e.code,p_voter:v.voter})));e=await rpc(host,'interview_control',{p_code:e.code,p_version:e.control_version,p_action:'start',p_data:{}});const t=performance.now();
 const submit=(v,i)=>rpc(anon,'interview_vote',{p_code:e.code,p_voter:v.voter,p_round:e.round,p_choice:i%6,p_request:v.request});
 await Promise.all(voters.map(submit));await Promise.all(voters.map(submit));
 const snapshot=await rpc(anon,'interview_snapshot',{p_code:e.code});assert.equal(snapshot.counts.reduce((a,b)=>a+b,0),size);const expected=Array(6).fill(0);voters.forEach((_,i)=>expected[i%6]++);assert.deepEqual(snapshot.counts,expected);
 console.log(`PASS ${size} simultaneous votes + retries, ${Math.round(performance.now()-t)}ms, exact counts`);e=snapshot;
 }finally{const s=await rpc(anon,'interview_snapshot',{p_code:e.code});await rpc(host,'interview_control',{p_code:e.code,p_version:s.control_version,p_action:'end',p_data:{}});}
}
await host.auth.signOut();

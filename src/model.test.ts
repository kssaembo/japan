import {describe,it,expect} from 'vitest';
import {makeDemo,control,leaders,pickResult,total,categories} from './model';
import {results} from './content/results';
import {remarks} from './content/remarks';
import {audioManifest} from './content/audio';
describe('manual presentation contract',()=>{
 it('completes 10-stage workflow and freezes voting before winner',()=>{let e=makeDemo();e=control(e,'stage',{stage:2});e=control(e,'start');e.counts=[3,0,4,1,1,2];expect(()=>control(e,'stage',{stage:5})).toThrow('CLOSE_FIRST');e=control(e,'close');e=control(e,'select',{winner:'game',result_id:'game_01',remark_id:'game_02'});for(let s=5;s<=10;s++)e=control(e,'stage',{stage:s});expect(e.stage).toBe(10);expect(e.used_results).toEqual(['game_01']);expect(total(e)).toBe(11);});
 it('requires tie resolution and excludes a nonleader',()=>{let e=makeDemo();e=control(e,'start');e.counts=[5,5,0,0,0,0];e=control(e,'close');expect(leaders(e)).toEqual(['lesson','homework']);expect(()=>control(e,'select',{winner:'game',result_id:'game_01',remark_id:'game_01'})).toThrow();});
 it('does not pick previously used result until all four are used',()=>{expect(pickResult('lesson',['lesson_01','lesson_02','lesson_03'],()=>0)).toBe('lesson_04');});
 it('stop closes voting and reset starts a new round preserving used materials',()=>{let e=makeDemo();e.used_results=['lesson_01'];e=control(e,'start');e.counts=[9,0,0,0,0,0];e=control(e,'stop');expect(e.vote_status).toBe('closed');e=control(e,'reset');expect(e.round).toBe(2);expect(total(e)).toBe(0);expect(e.used_results).toEqual(['lesson_01']);});
 it('never opens old closed round without reset',()=>{let e=control(makeDemo(),'start');e=control(e,'close');expect(()=>control(e,'start')).toThrow('RESET_REQUIRED');});
});
describe('complete content inventory',()=>{
 it('has 24 unique results and 24 bilingual jokes',()=>{expect(new Set(results.map(r=>r.id)).size).toBe(24);expect(remarks.length).toBe(24);for(const c of categories){expect(results.filter(r=>r.category===c.id)).toHaveLength(4);expect(remarks.filter(r=>r.category===c.id)).toHaveLength(4);}for(const r of results){expect(r.prompt.length).toBeGreaterThan(80);expect(r.sections.length).toBeGreaterThan(0);for(const s of r.sections)expect((s.body?.length||0)+(s.rows?.length||0)).toBeGreaterThan(0);}});
 it('has valid game answers and matching audio scripts',()=>{for(const r of results){for(const q of r.game?.questions||[])expect(q.options[q.answer]).toBeTruthy();}expect(results.filter(r=>r.game)).toHaveLength(4);expect(audioManifest.length).toBe(66);for(const r of remarks)for(const language of ['ko','ja'])expect(audioManifest.find(a=>a.id===r.id&&a.language===language)?.text).toBe(r[language as 'ko'|'ja']);});
});

// @vitest-environment jsdom
import {it,expect,vi} from 'vitest';
import {AudioEngine} from './audio';
import {makeDemo} from './model';
vi.mock('./backend',()=>({setCue:vi.fn().mockResolvedValue(undefined)}));
it('plays the installed Korean voice before the Japanese voice on the lecturer laptop',async()=>{
 const spoken:string[]=[];
 const voices=[{name:'Korean local',lang:'ko-KR',localService:true,default:true},{name:'Japanese local',lang:'ja-JP',localService:true,default:true}] as SpeechSynthesisVoice[];
 vi.stubGlobal('speechSynthesis',{getVoices:()=>voices,cancel:vi.fn(),speak:(u:SpeechSynthesisUtterance)=>{spoken.push(u.lang);queueMicrotask(()=>{u.onstart?.(new Event('start') as SpeechSynthesisEvent);u.onend?.(new Event('end') as SpeechSynthesisEvent);});}});
 vi.stubGlobal('SpeechSynthesisUtterance',class {lang='';voice?:SpeechSynthesisVoice;volume=1;rate=1;onstart?:EventListener;onend?:EventListener;onerror?:EventListener;constructor(public text:string){}});
 const engine=new AudioEngine();await engine.activate();await engine.play({...makeDemo(),language:'both'},'intro');
 expect(spoken).toEqual(['ko-KR','ja-JP']);expect(engine.voiceStatus()).toContain('로컬');vi.unstubAllGlobals();
});

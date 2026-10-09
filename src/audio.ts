import {audioManifest} from './content/audio';
import type {EventState,Cue} from './model';
import {setCue} from './backend';

export class AudioEngine {
 enabled=false; volume=.8; generation=0; onStatus:(message:string)=>void=()=>{};
 private pending:(()=>void)|null=null;
 get voices(){return typeof window==='undefined'||!('speechSynthesis' in window)?[]:window.speechSynthesis.getVoices();}
 voice(language:'ko'|'ja'){
  const candidates=this.voices.filter(v=>v.lang.toLowerCase().startsWith(language));
  return candidates.find(v=>v.localService&&v.default)||candidates.find(v=>v.localService)||candidates[0];
 }
 voiceStatus(){return (['ko','ja'] as const).map(lang=>{const v=this.voice(lang);return `${lang==='ko'?'한국어':'日本語'}: ${v?`${v.name}${v.localService?' · 로컬':' · 오프라인 확인 필요'}`:'음성 없음'}`;}).join(' / ');}
 async activate(){
  if(!('speechSynthesis' in window))throw Error('이 브라우저는 음성 합성을 지원하지 않습니다.');
  this.enabled=true;
  if(!this.voices.length)await new Promise<void>(resolve=>{const t=setTimeout(resolve,1200);window.speechSynthesis.addEventListener('voiceschanged',()=>{clearTimeout(t);resolve();},{once:true});});
  this.onStatus(`노트북 음성 활성화 · ${this.voiceStatus()}`);
 }
 stop(){this.generation++;window.speechSynthesis?.cancel();this.pending?.();this.pending=null;}
 async play(e:EventState,id:string){
  this.stop();const generation=this.generation;
  if(!this.enabled||e.language==='off'){this.onStatus('음성 꺼짐');return;}
  for(const lang of (e.language==='both'?['ko','ja']:[e.language]) as ('ko'|'ja')[]){
   if(generation!==this.generation)return;
   const entry=audioManifest.find(x=>x.id===id&&x.language===lang),voice=this.voice(lang);
   if(!entry||!voice){this.onStatus(`${lang} 음성이 없습니다. 노트북 언어 음성을 설치해 주세요.`);continue;}
   await new Promise<void>(resolve=>{
    const utterance=new SpeechSynthesisUtterance(entry.text);utterance.lang=voice.lang;utterance.voice=voice;utterance.volume=this.volume;utterance.rate=.95;
    let finished=false;const finish=()=>{if(finished)return;finished=true;clearTimeout(timeout);this.pending=null;resolve();};
    this.pending=finish;
    const timeout=setTimeout(()=>{this.onStatus(`${lang} 음성 응답 없음`);window.speechSynthesis.cancel();finish();},Math.max(20000,entry.estimatedSeconds*3000));
    utterance.onstart=()=>{if(generation!==this.generation)return;const cue:Cue={id,language:lang,started_at:Date.now(),duration:entry.estimatedSeconds,playing:true};void setCue(e,cue).catch(()=>{});this.onStatus(`${lang==='ko'?'한국어':'日本語'} 재생 중 · ${voice.name}`);};
    utterance.onend=finish;utterance.onerror=()=>{if(generation===this.generation)this.onStatus(`${lang} 음성 재생 실패`);finish();};
    window.speechSynthesis.speak(utterance);
   });
  }
  if(generation===this.generation){void setCue(e,null).catch(()=>{});this.onStatus(`재생 완료 · ${this.voiceStatus()}`);}
 }
}
export const audio=new AudioEngine();
export function stageAudio(e:EventState){return e.stage===1?'intro':e.stage===5&&e.winner?`winner_${e.winner}`:e.stage===8?e.remark_id:null;}

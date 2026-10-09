import {audioManifest} from './content/audio';
import type {EventState,Cue} from './model';
import {setCue} from './backend';
export type AudioEntry=typeof audioManifest[number];
export class AudioEngine{
 media=new Audio(); enabled=false; volume=.8; generation=0; context:AudioContext|null=null;
 cancelPending:(()=>void)|null=null; onStatus:(message:string)=>void=()=>{};
 async activate(){this.context??=new AudioContext();await this.context.resume();this.enabled=true;this.tone();this.onStatus('오디오 활성화 · 테스트음을 확인한 뒤 MP3도 시험해 주세요.');}
 tone(){if(!this.context||!this.enabled)return;const o=this.context.createOscillator(),g=this.context.createGain();o.connect(g);g.connect(this.context.destination);o.frequency.value=660;g.gain.setValueAtTime(.04*this.volume,this.context.currentTime);g.gain.exponentialRampToValueAtTime(.001,this.context.currentTime+.16);o.start();o.stop(this.context.currentTime+.17);}
 stop(){this.generation++;this.media.pause();this.media.currentTime=0;this.cancelPending?.();this.cancelPending=null;}
 async preload(){const statuses=await Promise.all(audioManifest.map(async entry=>{try{const r=await fetch(entry.path,{cache:'force-cache'});return r.ok&&r.headers.get('content-type')?.startsWith('audio/')?1:0;}catch{return 0;}}));return statuses.reduce<number>((a,b)=>a+b,0);}
 async play(e:EventState,id:string){
  this.stop();const generation=this.generation;if(!this.enabled||e.language==='off'){this.onStatus('음성 꺼짐 · 화면 자막으로 진행합니다.');return;}
  const run=async()=>{let success=true;for(const language of (e.language==='both'?['ko','ja']:[e.language]) as ('ko'|'ja')[]){if(generation!==this.generation)return;const entry=audioManifest.find(x=>x.id===id&&x.language===language);if(!entry)continue;success=(await this.track(entry,e,generation))&&success;}if(generation===this.generation){this.onStatus(success?'재생 종료 · 다음 단계는 강사가 진행합니다.':'MP3 누락 또는 재생 실패 · 파일을 추가하거나 자막으로 진행해 주세요.');await setCue(e,null).catch(()=>{});}};
  if(navigator.locks){await navigator.locks.request('interview-host-audio',{ifAvailable:true},async lock=>{if(!lock){this.onStatus('다른 강사 탭에서 음성이 재생 중입니다.');return;}await run();});}else await run();
 }
 async track(entry:AudioEntry,e:EventState,generation:number){
  const a=this.media;a.src=entry.path;a.volume=this.volume;a.preload='auto';
  return new Promise<boolean>(resolve=>{let finished=false,success=true;const end=()=>{if(finished)return;finished=true;clearTimeout(timer);a.onended=null;a.onerror=null;a.onplaying=null;if(this.cancelPending===end)this.cancelPending=null;resolve(success);};this.cancelPending=end;
   const timer=setTimeout(()=>{success=false;a.pause();this.onStatus('음성 응답 지연 · 자막으로 진행해 주세요.');end();},Math.max(20000,entry.estimatedSeconds*1000+15000));
   a.onended=end;a.onerror=()=>{success=false;this.onStatus(`음성 파일 없음 또는 재생 실패: ${entry.path} · 자막으로 진행할 수 있습니다.`);end();};
   a.onplaying=()=>{if(generation!==this.generation){end();return;}const cue:Cue={id:entry.id,language:entry.language,started_at:Date.now(),duration:Number.isFinite(a.duration)?a.duration:entry.estimatedSeconds,playing:true};void setCue(e,cue).catch(()=>this.onStatus('음성은 재생 중입니다. 자막 동기화 연결을 확인해 주세요.'));this.onStatus(`${entry.language.toUpperCase()} 재생 중`);};
   void a.play().catch(()=>{success=false;this.onStatus('음성을 재생하지 못했습니다. MP3 파일과 오디오 활성화를 확인해 주세요.');end();});
  });
 }
}
export const audio=new AudioEngine();
export function stageAudio(e:EventState){return e.stage===1?'intro':e.stage===5&&e.winner?`winner_${e.winner}`:e.stage===7?'prompt_send':e.stage===8?e.remark_id:e.stage===9?'result_intro':null;}

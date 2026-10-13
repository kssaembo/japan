export const categories = [
 {id:'lesson',title:'수업 준비',tag:'LESSON DESIGN',emoji:'📚',color:'#68B7FF',description:'내일 수업자료, 10분 만에 끝내줘!'},
 {id:'homework',title:'숙제 관리',tag:'HOME LEARNING',emoji:'🏠',color:'#FFBA85',description:'우리 아이가 숙제를 스스로 하게 해줘!'},
 {id:'game',title:'학습 게임',tag:'PLAY & LEARN',emoji:'🎮',color:'#B9A0FF',description:'아이들이 눈을 반짝일 수업을 만들어줘!'},
 {id:'letter',title:'가정통신문',tag:'SCHOOL LETTERS',emoji:'✉️',color:'#F49BBB',description:'한국어·일본어 안내문을 대신 써줘!'},
 {id:'meeting',title:'회의 단축',tag:'SMART MEETINGS',emoji:'⏰',color:'#EACB79',description:'회의는 제발 10분 안에 끝내줘!'},
 {id:'speaking',title:'한국어 말하기',tag:'KOREAN SPEAKING',emoji:'🗣️',color:'#36D5C5',description:'우리 아이의 한국어 말문을 열어줘!'},
] as const;
export type Category = typeof categories[number]['id'];
export type Language = 'ko'|'ja'|'both'|'off';
export const stages = ['AI 선생님 등장 · 참여','청중 입장','실시간 투표','투표 마감','1위 발표','프롬프트 공개','AI 요청 시뮬레이션','AI의 한마디','교육자료 공개','제작 비하인드'];
// Preserve server stage identifiers; stages 1 and 2 share one visible lobby.
export const displayedStage=(stage:number)=>stage<=2?1:stage-1;
export const presentationStages=stages.filter((_,i)=>i!==1);

export type Cue={id:string,language:'ko'|'ja',started_at:number,duration:number,playing:boolean};
export type EventState={id:string;code:string;title:string;mode:'live'|'rehearsal'|'demo';stage:number;stage_seq:number;control_version:number;revision:number;round:number;vote_status:'idle'|'open'|'closed';counts:number[];winner:Category|null;result_id:string|null;remark_id:string|null;used_results:string[];language:Language;animation_seconds:number;result_page:number;cue:Cue|null;stopped:boolean;ended:boolean;capacity:number;joined:number;ready:number;created_at:string};
export const total=(e:Pick<EventState,'counts'>)=>e.counts.reduce((a,b)=>a+b,0);
export const leaders=(e:Pick<EventState,'counts'>)=>e.counts.flatMap((n,i)=>n>0&&n===Math.max(...e.counts)?[categories[i].id]:[]);
export const ranked=(e:Pick<EventState,'counts'>)=>categories.map((c,i)=>({...c,count:e.counts[i],index:i})).sort((a,b)=>b.count-a.count||a.index-b.index);
export function pickResult(category:Category,_used:string[],_random=Math.random){return `${category}_01`;}
export function makeDemo():EventState{return {id:'demo',code:'DEMO',title:'오사카 한글학교 특별 채용',mode:'demo',stage:1,stage_seq:0,control_version:0,revision:0,round:1,vote_status:'idle',counts:[0,0,0,0,0,0],winner:null,result_id:null,remark_id:null,used_results:[],language:'both',animation_seconds:3,result_page:0,cue:null,stopped:false,ended:false,capacity:300,joined:0,ready:0,created_at:new Date().toISOString()};}
export function control(e:EventState,action:string,data:Record<string,unknown>={}):EventState{
 const s=structuredClone(e);
 if(s.ended&&action!=='end')throw Error('EVENT_ENDED');
 if(action==='start'){if(s.vote_status!=='idle')throw Error('RESET_REQUIRED');s.vote_status='open';s.stage=3;s.stopped=false;}
 else if(action==='close'){if(s.vote_status!=='open')throw Error('NOT_OPEN');s.vote_status='closed';s.stage=4;}
 else if(action==='select'){if(s.vote_status!=='closed')throw Error('CLOSE_FIRST');const w=data.winner as Category;if(!leaders(s).includes(w))throw Error('INVALID_WINNER');if(!new RegExp(`^${w}_0[1-4]$`).test(String(data.result_id))||!new RegExp(`^${w}_0[1-4]$`).test(String(data.remark_id)))throw Error('INVALID_CONTENT');s.winner=w;s.result_id=String(data.result_id);s.remark_id=String(data.remark_id);s.result_page=0;}
 else if(action==='stage'){const n=Number(data.stage);if(!Number.isInteger(n)||n<1||n>10)throw Error('INVALID_STAGE');if(n<3&&s.vote_status==='open')throw Error('CLOSE_FIRST');if(n===3&&s.vote_status!=='open')throw Error('START_FIRST');if(n>=4&&s.vote_status!=='closed')throw Error('CLOSE_FIRST');if(n>=5&&!s.winner)throw Error('SELECT_WINNER_FIRST');s.stage=n;if(n===9&&s.result_id&&!s.used_results.includes(s.result_id))s.used_results.push(s.result_id);}
 else if(action==='settings'){if(data.language)s.language=data.language as Language;if(data.animation_seconds)s.animation_seconds=Math.max(2,Math.min(4,Number(data.animation_seconds)));}
 else if(action==='page')s.result_page=Math.max(0,Math.min(30,Number(data.page)));
 else if(action==='stop'){s.stopped=true;if(s.vote_status==='open'){s.vote_status='closed';s.stage=4;}}
 else if(action==='resume')s.stopped=false;
 else if(action==='reset'){s.round++;s.counts=[0,0,0,0,0,0];s.vote_status='idle';s.winner=null;s.result_id=null;s.remark_id=null;s.result_page=0;s.stage=2;s.stopped=false;}
 else if(action==='end'){s.ended=true;s.vote_status='closed';}
 else throw Error('INVALID_ACTION');
 if(['stage','start','close','stop','resume','reset','end'].includes(action)){s.stage_seq++;s.cue=null;}
 s.control_version++;s.revision++;return s;
}

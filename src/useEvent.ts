import {useCallback,useEffect,useRef,useState} from 'react';
import {getEvent,supabase,explain} from './backend';
import type {EventState} from './model';
export function useEvent(code:string,interval=2500){
 const [event,setEvent]=useState<EventState|null>(null),[error,setError]=useState(''),[realtime,setRealtime]=useState('연결 중'),[lastSync,setLastSync]=useState(0);
 const current=useRef<EventState|null>(null),flight=useRef(false),codeRef=useRef(code);codeRef.current=code;
 const accept=useCallback((e:EventState)=>{if(e.code!==codeRef.current)return;if(!current.current||current.current.code!==e.code||e.revision>=current.current.revision){current.current=e;setEvent(e);}setLastSync(Date.now());setError('');},[]);
 const refresh=useCallback(async()=>{if(!code||flight.current)return;flight.current=true;try{const e=await getEvent(code);accept(e);}catch(e){if(codeRef.current===code)setError(explain(e));}finally{flight.current=false;}},[code,accept]);
 useEffect(()=>{current.current=null;setEvent(null);setError('');void refresh();const timer=window.setInterval(refresh,Math.max(2000,Math.min(10000,interval)));let lastSignal=0;const signal=()=>{if(Date.now()-lastSignal>300){lastSignal=Date.now();void refresh();}};window.addEventListener('online',signal);window.addEventListener('focus',signal);
 if(code==='DEMO'){setRealtime('로컬 데모');window.addEventListener('storage',signal);window.addEventListener('demo-change',signal);}
 const channel=code!=='DEMO'&&code&&supabase?supabase.channel(`interview:${code}`,{config:{private:false}}).on('broadcast',{event:'changed'},signal).subscribe(status=>{setRealtime(status==='SUBSCRIBED'?'실시간 연결':'재연결 중 · DB 조회 유지');if(status==='SUBSCRIBED')void refresh();}):null;
 return()=>{clearInterval(timer);window.removeEventListener('online',signal);window.removeEventListener('focus',signal);window.removeEventListener('storage',signal);window.removeEventListener('demo-change',signal);if(channel)void supabase?.removeChannel(channel);};},[code,interval,refresh]);
 return {event,error,realtime,lastSync,refresh,accept};
}

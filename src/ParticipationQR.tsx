import {useEffect,useState} from 'react';
import {createPortal} from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';
import {X} from 'lucide-react';
export function ParticipationQR({url,size=260,onReset,disabled=false}:{url:string;size?:number;onReset?:()=>void;disabled?:boolean}){
 const [expanded,setExpanded]=useState(false);
 useEffect(()=>{if(!expanded)return;const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setExpanded(false)};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[expanded]);
 return <div className="participation-qr"><button className="qr-enlarge" aria-label="참여 QR 확대" onClick={()=>setExpanded(true)}><QRCodeSVG value={url} size={size} level="M" marginSize={3}/></button>{onReset&&<button className="qr-reset" disabled={disabled} onClick={onReset}>투표 초기화<small>投票をリセット</small></button>}{expanded&&createPortal(<div className="qr-lightbox" role="dialog" aria-modal="true" aria-label="참여 QR 확대" onClick={()=>setExpanded(false)}><button className="qr-close" aria-label="QR 확대 닫기" onClick={()=>setExpanded(false)}><X/></button><div onClick={e=>e.stopPropagation()}><QRCodeSVG value={url} size={640} level="M" marginSize={4}/><p>스마트폰으로 참여<small>スマートフォンで参加</small></p>{onReset&&<button className="qr-reset" disabled={disabled} onClick={onReset}>투표 초기화<small>投票をリセット</small></button>}</div></div>,document.body)}</div>;
}

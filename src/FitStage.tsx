import {useLayoutEffect,useRef,useState,type ReactNode} from 'react';
export const STAGE_WIDTH=1600,STAGE_HEIGHT=900;
export function stageScale(width:number,height:number){return Math.max(0,Math.min(width/STAGE_WIDTH,height/STAGE_HEIGHT));}
export function FitStage({children}:{children:ReactNode}){
 const root=useRef<HTMLDivElement>(null),[scale,setScale]=useState(1);
 useLayoutEffect(()=>{const el=root.current;if(!el)return;const measure=()=>{const r=el.getBoundingClientRect();if(r.width&&r.height)setScale(stageScale(r.width,r.height));};measure();const observer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(measure);observer?.observe(el);window.addEventListener('resize',measure);return()=>{observer?.disconnect();window.removeEventListener('resize',measure)}},[]);
 return <div className="stage-viewport" ref={root}><div className="stage-canvas" style={{width:STAGE_WIDTH,height:STAGE_HEIGHT,transform:`translate(-50%,-50%) scale(${scale})`}}>{children}</div></div>;
}

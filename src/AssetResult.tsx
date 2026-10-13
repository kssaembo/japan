import {useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {ArrowUpRight,Download,Expand,RotateCcw,X} from 'lucide-react';
import type {Result} from './content/results';
import {assetUrl,suppliedAssets} from './content/assets';
import {resultTitleJa} from './i18n';
export function AssetResult({result,page=0,onPage}:{result:Result;page?:number;onPage?:(p:number)=>void}){
 const asset=suppliedAssets[result.id],[local,setLocal]=useState(page),[expanded,setExpanded]=useState(false),[failed,setFailed]=useState(false),[reload,setReload]=useState(0),video=useRef<HTMLVideoElement>(null);
 const current=Math.min(Math.max(0,onPage?page:local),asset.views.length),view=current?asset.views[current-1]:null,url=assetUrl(result.id,view?.file||asset.cover);
 useEffect(()=>{setLocal(page);setExpanded(false);setFailed(false)},[page,result.id]);
 useEffect(()=>{setFailed(false);setExpanded(false);return()=>{video.current?.pause()}},[current]);
 useEffect(()=>{if(!expanded)return;const f=(e:KeyboardEvent)=>{if(e.key==='Escape')setExpanded(false)};window.addEventListener('keydown',f);return()=>window.removeEventListener('keydown',f)},[expanded]);
 const choose=(n:number)=>{video.current?.pause();setFailed(false);setExpanded(false);onPage?onPage(n):setLocal(n)};
 return <article className="supplied-result" aria-label={result.title}>
  <header className="supplied-heading"><div><h2>{result.title}</h2><p>{resultTitleJa[result.id]}</p></div><details className="download-menu"><summary><Download size={18}/> 다운로드 <small>ダウンロード</small></summary><div>{asset.downloads.map(d=><a key={d.file} href={assetUrl(result.id,d.file)} download={d.name}>{d.label}<small>{d.ja}</small></a>)}</div></details></header>
  <nav className="supplied-tabs" aria-label="결과물 보기"><button className={!current?'active':''} onClick={()=>choose(0)}>표지<small>表紙</small></button>{asset.views.map((v,i)=><button key={v.file} className={current===i+1?'active':''} onClick={()=>choose(i+1)}>{v.label}<small>{v.ja}</small></button>)}</nav>
  <div className={`supplied-content ${view?.kind==='html'?'embedded-material':''}`}>
   {failed?<div className="material-error"><p>자료를 열지 못했습니다.<small>教材を開けませんでした。</small></p><button onClick={()=>{setFailed(false);setReload(x=>x+1)}}><RotateCcw/>다시 시도 / 再試行</button><a href={url} target="_blank" rel="noopener noreferrer">파일 열기 / ファイルを開く</a></div>:
    view?.kind==='html'?<iframe key={`${url}:${reload}`} src={url} title={view.label} sandbox="allow-scripts allow-modals" referrerPolicy="no-referrer" onError={()=>setFailed(true)}/>:
    view?.kind==='video'?<video key={`${url}:${reload}`} ref={video} src={url} poster={assetUrl(result.id,asset.cover)} controls playsInline preload="metadata" onError={()=>setFailed(true)} aria-label="한국어 자기소개 애니메이션"/>:
    <button className="material-image" aria-label="자료 이미지 확대" onClick={()=>setExpanded(true)}><img key={`${url}:${reload}`} src={url} alt={view?.label||result.title+' 표지'} onError={()=>setFailed(true)}/><span><Expand size={18}/>크게 보기<small>拡大</small></span></button>}
  </div>
  {view&&<a className="material-open" href={url} target="_blank" rel="noopener noreferrer">새 탭에서 열기<small>別タブで開く</small><ArrowUpRight size={16}/></a>}
  {expanded&&createPortal(<div className="material-lightbox" role="dialog" aria-modal="true" aria-label="확대 자료" onClick={()=>setExpanded(false)}><button aria-label="확대 닫기" onClick={()=>setExpanded(false)}><X/></button><img src={url} alt="확대 자료" onClick={e=>e.stopPropagation()}/></div>,document.body)}
 </article>;
}

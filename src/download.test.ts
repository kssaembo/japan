// @vitest-environment jsdom
import {it,expect} from 'vitest';
import {resultHtml} from './download';
import {results} from './content/results';
it('exports every worksheet section and escapes document text',()=>{const r=results[0];const text=resultHtml({...r,title:'<script>alert(1)</script>'});expect(text).toContain('&lt;script&gt;');for(const section of r.sections)expect(text).toContain(section.title);});
it('the downloaded game runs independently and reveals its answer',()=>{const r=results.find(r=>r.id==='game_01')!;const html=resultHtml(r);document.body.innerHTML=html;const script=document.querySelector('script')!.textContent!;new Function(script)();const q=r.game!.questions![0];(document.querySelectorAll('#options button')[q.answer] as HTMLButtonElement).click();expect(document.querySelector('#answer')!.textContent).toContain(q.explanation);(document.querySelector('#next') as HTMLButtonElement).click();expect(document.querySelector('#question')!.textContent).toContain(r.game!.questions![1].question);document.body.innerHTML='';});

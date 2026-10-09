// @vitest-environment jsdom
import {beforeEach,afterEach,describe,it,expect,vi} from 'vitest';
import {render,screen,fireEvent,waitFor,cleanup} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import {readDemo,restartDemo} from './backend';
import {results} from './content/results';
import {ResultView} from './components';
vi.mock('./audio',()=>({audio:{stop:vi.fn(),play:vi.fn(),activate:vi.fn().mockResolvedValue(undefined),preload:vi.fn().mockResolvedValue(0),media:{volume:.8},onStatus:()=>{}},stageAudio:()=>null}));
beforeEach(()=>{localStorage.clear();vi.stubGlobal('confirm',()=>true);});afterEach(()=>{cleanup();vi.restoreAllMocks();});
describe('host demo rendered behavior',()=>{
 it('restarts a completed demo with monotonic versions so all tabs recover',async()=>{const e=readDemo();e.ended=true;e.stage=10;e.revision=80;e.control_version=12;e.stage_seq=10;localStorage.setItem('interview:demo:v1',JSON.stringify(e));render(<MemoryRouter initialEntries={['/host?demo=1']}><App/></MemoryRouter>);await screen.findByText('함께해 주셔서 감사합니다.');fireEvent.click(screen.getByRole('button',{name:'데모 새로 시작'}));await waitFor(()=>expect(readDemo().revision).toBe(81));await screen.findByText('지원자 001. 준비는 되어 있습니다.',{exact:false});expect(readDemo().ended).toBe(false);expect(readDemo().stage).toBe(1);});
 it('operates vote to result, manually advances, restores the stored stage',async()=>{render(<MemoryRouter initialEntries={['/host?demo=1']}><App/></MemoryRouter>);await screen.findByText('오사카 한글학교 특별 채용');
 fireEvent.click(screen.getByRole('button',{name:'다음 단계'}));await waitFor(()=>expect(readDemo().stage).toBe(2));
 fireEvent.click(screen.getByRole('button',{name:'투표 시작'}));await waitFor(()=>expect(readDemo().vote_status).toBe('open'));
 fireEvent.click(screen.getByRole('button',{name:'+10표'}));await waitFor(()=>expect(readDemo().counts[0]).toBe(10));
 fireEvent.click(screen.getByRole('button',{name:'투표 마감'}));await waitFor(()=>expect(readDemo().winner).toBe('lesson'));
 fireEvent.click(screen.getByRole('button',{name:'1위 발표'}));await waitFor(()=>expect(readDemo().stage).toBe(5));
 fireEvent.click(screen.getByRole('button',{name:'시연 건너뛰기'}));await waitFor(()=>expect(readDemo().stage).toBe(9));
 expect(readDemo().used_results).toHaveLength(1);cleanup();render(<MemoryRouter initialEntries={['/host?demo=1']}><App/></MemoryRouter>);await screen.findByText('결과물 확대 부분 제어');expect(readDemo().counts[0]).toBe(10);
 });
 it('does not imply real voting in the demo reveal',async()=>{const e=readDemo();e.stage=10;localStorage.setItem('interview:demo:v1',JSON.stringify(e));render(<MemoryRouter initialEntries={['/screen/DEMO']}><App/></MemoryRouter>);await screen.findByText('지금은 가상 투표를 사용하는 데모 시연입니다.');expect(screen.queryByText('실시간 투표는 실제로 진행되었습니다.')).toBeNull();});
 it('renders all result variants without blank sections',()=>{for(const r of results){for(let p=0;p<r.sections.length;p++){const ui=render(<ResultView result={r} page={p}/>);expect(ui.getByText(r.title)).toBeTruthy();expect(ui.getByText(r.sections[p].title)).toBeTruthy();ui.unmount();}}});
 it('plays a quiz and reveals an explanation',()=>{const r=results.find(x=>x.id==='game_01')!;const q=r.game!.questions![0];render(<ResultView result={r}/>);fireEvent.click(screen.getByRole('button',{name:q.options[q.answer]}));expect(screen.getByRole('status').textContent).toContain(q.explanation);});
});

// @vitest-environment jsdom
import {beforeEach,afterEach,describe,it,expect,vi} from 'vitest';
import {render,screen,fireEvent,waitFor,cleanup,act} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import {readDemo,restartDemo} from './backend';
import {results} from './content/results';
import {ResultView,Countdown} from './components';
vi.mock('./audio',()=>({audio:{stop:vi.fn(),play:vi.fn(),activate:vi.fn().mockResolvedValue(undefined),preload:vi.fn().mockResolvedValue(0),media:{volume:.8},onStatus:()=>{}},stageAudio:()=>null}));
beforeEach(()=>{localStorage.clear();vi.stubGlobal('confirm',()=>true);});afterEach(()=>{cleanup();vi.restoreAllMocks();});
describe('host demo rendered behavior',()=>{
 it('restarts a completed demo with monotonic versions so all tabs recover',async()=>{const e=readDemo();e.ended=true;e.stage=10;e.revision=80;e.control_version=12;e.stage_seq=10;localStorage.setItem('interview:demo:v1',JSON.stringify(e));render(<MemoryRouter initialEntries={['/host?demo=1']}><App/></MemoryRouter>);await screen.findByText('함께해 주셔서 감사합니다.');fireEvent.click(screen.getByRole('button',{name:'데모 새로 시작'}));await waitFor(()=>expect(readDemo().revision).toBe(81));await screen.findByText('AI新人先生の採用面接');expect(readDemo().ended).toBe(false);expect(readDemo().stage).toBe(1);});
 it('operates vote to result, manually advances, restores the stored stage',async()=>{render(<MemoryRouter initialEntries={['/host?demo=1']}><App/></MemoryRouter>);await screen.findByText('오사카 한글학교 특별 채용');
 fireEvent.click(screen.getByRole('button',{name:'다음 단계'}));await waitFor(()=>expect(readDemo().stage).toBe(2));
 fireEvent.click(screen.getByRole('button',{name:'투표 시작'}));await waitFor(()=>expect(readDemo().vote_status).toBe('open'));
 fireEvent.click(screen.getByRole('button',{name:'+10표'}));await waitFor(()=>expect(readDemo().counts[0]).toBe(10));
 fireEvent.click(screen.getByRole('button',{name:'투표 마감'}));await waitFor(()=>expect(readDemo().winner).toBe('lesson'));
 fireEvent.click(screen.getByRole('button',{name:'1위 발표'}));await waitFor(()=>expect(readDemo().stage).toBe(5));
 fireEvent.click(screen.getByRole('button',{name:'시연 건너뛰기'}));await waitFor(()=>expect(readDemo().stage).toBe(9));
 expect(readDemo().used_results).toHaveLength(1);cleanup();render(<MemoryRouter initialEntries={['/host?demo=1']}><App/></MemoryRouter>);await screen.findByText('결과물 확대 부분 제어');expect(readDemo().counts[0]).toBe(10);
 });
 it('does not imply real voting in the demo reveal',async()=>{const e=readDemo();e.stage=10;localStorage.setItem('interview:demo:v1',JSON.stringify(e));render(<MemoryRouter initialEntries={['/screen/DEMO']}><App/></MemoryRouter>);await screen.findByRole('link',{name:/원래 강의 슬라이드로 돌아가기/});expect(screen.queryByText('실시간 투표는 실제로 진행되었습니다.')).toBeNull();});
 it('controls the same demo from the projector screen',async()=>{render(<MemoryRouter initialEntries={['/screen/DEMO']}><App/></MemoryRouter>);await screen.findByText('AI新人先生の採用面接');fireEvent.click(screen.getByRole('button',{name:/다음/}));await waitFor(()=>expect(readDemo().stage).toBe(2));fireEvent.click(screen.getByRole('button',{name:/투표 시작/}));await waitFor(()=>expect(readDemo().stage).toBe(3));expect(screen.getAllByText('最初の仕事').length).toBeGreaterThan(0);});
 it('renders all result variants without blank sections',()=>{for(const r of results){for(let p=0;p<r.sections.length;p++){const ui=render(<ResultView result={r} page={p}/>);expect(ui.getByText(r.title)).toBeTruthy();expect(ui.getByText(r.sections[p].title)).toBeTruthy();ui.unmount();}}});
 it('plays a quiz and reveals an explanation',()=>{const r=results.find(x=>x.id==='game_01')!;const q=r.game!.questions![0];render(<ResultView result={r}/>);fireEvent.click(screen.getByRole('button',{name:q.options[q.answer]}));expect(screen.getByRole('status').textContent).toContain(q.explanation);});
});

it('opens the projector in a separate tab and keeps its administrator return link',async()=>{render(<MemoryRouter initialEntries={['/host?demo=1']}><App/></MemoryRouter>);const open=await screen.findByRole('link',{name:/전체 화면에서 진행/});expect(open.getAttribute('target')).toBe('_blank');expect(open.getAttribute('href')).toBe('/screen/DEMO');cleanup();render(<MemoryRouter initialEntries={['/screen/DEMO']}><App/></MemoryRouter>);expect((await screen.findByRole('link',{name:/관리자/})).getAttribute('href')).toBe('/host?demo=1');});
it('retains one countdown frame through 3, 2, 1 and the winner',()=>{vi.useFakeTimers();const ui=render(<Countdown><h1>당선</h1></Countdown>);const frame=ui.container.querySelector('.reveal-frame');expect(screen.getByText('3')).toBeTruthy();act(()=>vi.advanceTimersByTime(1000));expect(screen.getByText('2')).toBeTruthy();act(()=>vi.advanceTimersByTime(1000));expect(screen.getByText('1')).toBeTruthy();act(()=>vi.advanceTimersByTime(1000));expect(screen.getByText('당선')).toBeTruthy();expect(ui.container.querySelector('.reveal-frame')).toBe(frame);vi.useRealTimers();});

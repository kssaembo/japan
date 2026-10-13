// @vitest-environment jsdom
import {afterEach,it,expect,vi} from 'vitest';
import {render,screen,fireEvent,cleanup,act} from '@testing-library/react';
import {ParticipationQR} from './ParticipationQR';
import {stageScale,STAGE_WIDTH,STAGE_HEIGHT} from './FitStage';
import {JoinPanel,Stage} from './components';
import {makeDemo} from './model';
afterEach(()=>{cleanup();vi.useRealTimers()});
it('fits the complete scene inside common laptop and projector viewports',()=>{for(const [w,h] of [[1366,500],[1920,820],[1024,560],[1280,600],[390,590],[2560,1200]]){const s=stageScale(w,h);expect(s).toBeGreaterThan(0);expect(STAGE_WIDTH*s).toBeLessThanOrEqual(w+.01);expect(STAGE_HEIGHT*s).toBeLessThanOrEqual(h+.01);expect((STAGE_WIDTH*s)/(STAGE_HEIGHT*s)).toBeCloseTo(16/9);}});
it('expands QR without displaying a room identifier and resets directly below QR',()=>{const reset=vi.fn();const ui=render(<JoinPanel event={{...makeDemo(),code:'ROOM12'}} onReset={reset}/>);expect(screen.queryByText('ROOM12')).toBeNull();const button=screen.getByRole('button',{name:/투표 초기화/});expect(button.previousElementSibling?.getAttribute('aria-label')).toBe('참여 QR 확대');fireEvent.click(button);expect(reset).toHaveBeenCalledOnce();fireEvent.click(screen.getByRole('button',{name:'참여 QR 확대'}));expect(screen.getByRole('dialog',{name:'참여 QR 확대'})).toBeTruthy();fireEvent.keyDown(window,{key:'Escape'});expect(screen.queryByRole('dialog')).toBeNull();});
it('shows the winner after countdown without an expanding audio caption',()=>{vi.useFakeTimers();const e={...makeDemo(),stage:5,winner:'lesson' as const,counts:[12,0,0,0,0,0],cue:{id:'winner_lesson',language:'ko' as const,started_at:Date.now(),duration:3,playing:true}};const ui=render(<Stage event={e}/>);expect(screen.getByText('3')).toBeTruthy();act(()=>vi.advanceTimersByTime(3100));expect(screen.getByRole('heading',{name:'수업 준비'})).toBeTruthy();expect(ui.container.querySelector('.subtitle')).toBeNull();});

it('shares one arrival scene across legacy stages and uses cumulative participant count',()=>{const e={...makeDemo(),joined:42,ready:7};const ui=render(<Stage event={e}/>);expect(screen.getByText('42')).toBeTruthy();expect(screen.queryByText('7')).toBeNull();expect(screen.getByText('AI 선생님에게')).toBeTruthy();const counter=ui.container.querySelector('.participant-count');ui.rerender(<Stage event={{...e,stage:2}}/>);expect(ui.container.querySelector('.participant-count')).toBe(counter);expect(screen.getByText('참여 인원')).toBeTruthy();expect(screen.getByText('QR 보기')).toBeTruthy();});

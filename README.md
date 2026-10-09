# AI 신입 선생님 채용 면접

오사카 한글학교 특별 채용. React + TypeScript + Vite, Tailwind CSS, Motion, Supabase PostgreSQL/Auth/Realtime로 만든 강사 수동 진행형 투표·교육자료 시연 서비스입니다.

## 먼저 알아둘 상태

- 서버 설정 없이 `/host?demo=1`에서 로컬 데모가 작동합니다. 데모 전광판은 `/screen/DEMO`입니다. 두 화면은 같은 브라우저의 탭에서 여세요.
- 실제 투표는 아래 Supabase 설정과 공개 HTTPS 배포를 완료한 뒤 사용합니다. 제공된 코드만으로 사용자 소유 서버가 자동 생성되지는 않습니다.
- 교육자료 24종, 프롬프트 24개(업무별 결과물과 일치), 한·일 멘트 24쌍, 음성 대본 66개를 포함합니다.
- **실제 MP3 파일은 포함하지 않았습니다.** 파일이 없으면 자막으로 진행합니다. `docs/audio/PRODUCTION.md`에 제작·배치 방법이 있습니다.
- 외부 AI API, 실시간 TTS, WebRTC, PeerJS는 사용하지 않습니다.
- 현재 확인 범위와 남은 현장 검증은 `docs/TEST_REPORT.md`를 읽어 주세요. 실제 100명 운영이 이미 검증되었다는 의미가 아닙니다.

## 1. Windows에서 데모 실행

1. Node.js 22.12 이상 또는 24 LTS를 설치합니다.
2. 압축을 풀고 `package.json`이 있는 `ai-teacher-interview` 폴더를 엽니다.
3. 폴더 주소창에 `cmd`를 입력하고 Enter를 누릅니다.
4. 아래를 한 줄씩 실행합니다.

```text
npm ci
npm run dev
```

5. 표시된 주소(기본 `http://localhost:4173`)를 엽니다.
6. 강사 시작하기 → 데모로 둘러보기 → 다음 단계 → 투표 시작 순으로 누릅니다.
7. `+1표`, `+5표`, `+10표`, 자동 투표, 역전 시연으로 그래프를 확인합니다.
8. 투표 마감 → 1위 발표 → 프롬프트 → AI 요청 → 한마디 → 결과 → 비하인드를 진행합니다.

이 localhost 주소는 다른 장소의 스마트폰이 접속할 주소가 아닙니다. 실제 참가자에게는 Vercel 공개 URL을 제공하세요.

## 2. Supabase 프로젝트 준비

기존 운영 프로젝트에 덧붙이기보다 이 행사 전용 새 프로젝트를 권장합니다. 프로젝트 리전 선택에서 제공되는 경우 **Northeast Asia (Tokyo), ap-northeast-1**을 선택하세요. 프로젝트 생성과 플랜 선택은 사용자 계정에서 진행합니다.

1. Supabase 대시보드에서 새 프로젝트를 생성합니다. 데이터베이스 비밀번호는 별도로 안전하게 보관합니다.
2. SQL Editor에서 `supabase/migrations/001_interview.sql` 전체를 붙여 넣고 실행합니다. **새 프로젝트에서 한 번 실행하는 초기 스키마**입니다. 이미 실행했다면 같은 SQL을 다시 실행하지 마세요.
3. Authentication의 사용자 관리에서 강사 이메일·비밀번호로 사용자를 만들고 확인된 계정으로 설정합니다. 이 앱에는 공개 회원가입 화면이 없습니다.
4. 해당 사용자의 UUID를 복사하여 SQL Editor에서 아래를 실행합니다. 이메일 주소가 아니라 UUID입니다.

```sql
insert into public.interview_admins(user_id)
values ('여기에_강사_AUTH_USER_UUID');
```

5. Auth 설정의 공개 신규 가입을 비활성화합니다. 다른 인증 방식은 이 앱에서 필요하지 않습니다.
6. 프로젝트 연결 정보에서 Project URL과 **publishable 키 또는 anon 키**를 확인합니다. `service_role`, secret 키, DB 비밀번호는 앱 환경변수에 넣지 마세요.
7. Realtime의 public Broadcast를 사용할 수 있게 유지합니다. 이 앱은 공개 채널에 집계가 바뀌었다는 알림만 전달합니다. 알림으로 수신한 숫자나 상태는 신뢰하지 않고 DB RPC로 다시 확인합니다. Postgres Changes용 테이블 publication 추가는 필요하지 않습니다.

UI 메뉴 이름은 서비스 개편에 따라 달라질 수 있습니다. 핵심은 Auth 사용자 등록, 관리자 허용 목록, 공개용 키, SQL 실행입니다.

## 3. 로컬 실제 서버 연결

`.env.example`을 복사하여 `.env.local` 파일을 만들고 다음 두 값만 넣습니다.

```dotenv
VITE_SUPABASE_URL=https://실제프로젝트.supabase.co
VITE_SUPABASE_ANON_KEY=실제_publishable_또는_anon_키
```

실행 중인 터미널에서 Ctrl+C를 누른 뒤 `npm run dev`로 다시 시작합니다. `/host`에서 강사 로그인 → 리허설 행사 생성으로 확인합니다. `.env.local`은 Git에 올리지 않습니다. 이 두 값은 브라우저용 공개 설정이므로 실제 보안은 SQL의 권한 검증과 RLS가 담당합니다.

## 4. GitHub와 Vercel 배포

1. GitHub에 새 저장소를 만들고 프로젝트 파일을 올립니다. `node_modules`, `.env.local`, `.git`은 올리지 않습니다. `package.json`, `package-lock.json`, `src`, `public`, `index.html`, `vite.config.ts`, `tsconfig.json`, `vercel.json`이 들어가야 합니다.
2. Vercel에서 새 프로젝트를 만들고 해당 저장소를 가져옵니다.
3. Framework는 Vite, Build Command는 `npm run build`, Output Directory는 `dist`입니다. 프로젝트 루트는 `package.json`이 있는 폴더로 선택합니다.
4. Vercel Environment Variables에 위의 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`를 추가합니다.
5. Deploy를 실행합니다. 변수를 나중에 바꿨다면 **다시 배포**해야 브라우저 번들에 반영됩니다.
6. 생성된 `https://...vercel.app` 주소를 열어 로그인합니다. 청중에게 로그인 보호가 걸리지 않는 공개 배포 주소를 사용합니다. Vercel Preview의 접근 보호와 Production 접근 설정을 구분하세요.
7. 리허설 행사에서 생성한 QR코드를 다른 스마트폰의 LTE로 스캔합니다. `/vote/코드`와 `/screen/코드`를 직접 새로고침해도 열리는지 확인합니다. SPA 경로 처리는 `vercel.json`에 포함되어 있습니다.

이 작업과 함께 제공되는 비공개 웹 시연 링크는 소유자 확인용입니다. 청중에게 배포할 공개 주소는 위 Vercel 배포로 준비하세요.

## 5. 행사 당일 운영

1. Windows 화면 설정을 **확장**으로 설정하고 강사 운영 화면은 노트북에 둡니다.
2. `/host`에 로그인 → 실제 연수 행사 생성. 리허설 코드와 다른 코드인지 확인합니다.
3. 프로젝터 화면 열기 → 새 창/탭을 프로젝터로 이동 → F11 전체 화면. 프로젝터에는 운영 버튼이 표시되지 않습니다.
4. 강사 화면에서 오디오 활성화 → 한국어/일본어 인사 테스트 → 전체 MP3 검사. **스피커 출력은 강사 PC**에서 확인합니다.
5. 도입 후 다음 단계로 QR 공개. 누적 입장과 최근 45초 접속을 구분합니다. 접속 인원은 heartbeat에 기반한 근사치이며 투표 수가 아닙니다.
6. 투표 시작 → 투표 마감. 마감은 서버에 저장된 뒤 화면에 반영됩니다. 단독 1위이면 사용하지 않은 결과물과 멘트를 자동 선택합니다. 동점이면 최다 득표 중 하나를 강사가 선택하고 확정합니다.
7. 1위 발표는 3초 카운트다운 뒤 공개됩니다. 프롬프트 화면은 자동으로 넘어가지 않습니다.
8. AI에게 업무 요청 → 한마디 → 결과물을 순서대로 공개합니다. 음성이 끝나도 다음 단계는 직접 누릅니다. 필요하면 시연 건너뛰기로 결과물로 이동합니다.
9. 긴 결과물은 강사 화면의 `결과물 확대 부분 제어`에서 이전·다음 부분을 누릅니다. 미니게임은 프로젝터 창으로 마우스를 옮겨 직접 클릭해 시연합니다. 게임의 개별 정답 선택은 창 사이에 동기화되지 않으며, 새로고침하면 게임만 처음으로 돌아갑니다.
10. 마지막 비하인드 화면에서 일반 강의 슬라이드로 창을 전환합니다.

투표 초기화는 새 회차를 만들며 이전 회차 DB 기록을 삭제하지 않습니다. 같은 참가자도 새 회차에는 한 번 다시 투표할 수 있습니다. 행사 종료는 되돌리지 않으며 새 행사를 생성해야 합니다.

## 6. 데모·리허설·실제 행사의 차이

| 구분 | 저장 | 참가자 스마트폰 | 용도 |
|---|---|---|---|
| 데모 | 현재 브라우저 localStorage | 실제 투표하지 않음 | 혼자 흐름 점검, 인터넷 장애 시 예비 시연 |
| 리허설 | Supabase의 독립 행사 | 서로 다른 네트워크에서도 실제 투표 | 인원·음성·복구 테스트 |
| 실제 행사 | Supabase의 별도 행사 | 실제 투표 | 연수 운영 |

데모에서 실제 행사로 가상 표를 옮기지 않습니다. 인터넷 장애 시 강사 화면에서 데모 전환 후 **프로젝터도 `/screen/DEMO`로 변경**합니다. 관객에게 데모 전환을 알립니다.

오프라인 대응: 온라인일 때 `오프라인 데모 준비`를 누르고 완료를 확인한 뒤 데모 운영 화면과 전광판을 열어 둡니다. 서비스워커는 앱과 배포 당시 존재하는 음성을 저장하며 외부 Supabase 응답·로그인 토큰을 캐시하지 않습니다. 캐시가 없거나 브라우저가 저장소를 삭제하면 오프라인 실행을 보장하지 않습니다. 개발 모드 대신 배포 또는 `npm run build` + `npm run preview`에서 테스트합니다.

## 7. 콘텐츠·음성 수정

| 파일 | 수정 내용 |
|---|---|
| `src/content/results.ts` | 24개 완성 자료, 자료에 맞춘 프롬프트, 게임 정답 |
| `src/content/remarks.ts` | 업무별 한국어·일본어 멘트 |
| `src/content/audio.ts` | 음성 대본, 경로, 말투, 길이 |
| `docs/audio/scripts.csv` | 성우·TTS 제작용 전체 음성 대본 |
| `public/audio/ko`, `public/audio/ja` | 같은 ID의 실제 MP3 파일 |
| `src/components.tsx`의 `Robot` | 교체 가능한 SVG 캐릭터와 표정 |
| `src/styles.css` | 색·글씨·화면 배치 |

MP3는 파일명 그대로 추가하고 다시 배포하면 코드 수정 없이 로딩됩니다. 멘트를 수정했다면 `remarks.ts`, `audio.ts`, CSV 대본 및 해당 MP3의 내용도 일치시켜야 합니다. 번역은 수업 자료 초안이며 현지 교사의 말투·용어 최종 검토를 권장합니다. 자막은 음성 시작과 길이를 기준으로 표시하며 낱말별 음성 정렬 정보는 포함하지 않았습니다.

## 8. 테스트 명령

```text
npm test
npm run test:db
npm run build
npm run audio:check
```

`audio:check`는 파일이 없는 현재 패키지에서 exit code 2를 반환합니다. 이는 MP3가 완성됐다는 오인을 막기 위한 검사입니다. 헤더만 검사하므로 실제 듣기 점검도 필요합니다.

실제 Supabase 30/50/100명 동시 요청 검증은 `docs/LIVE_TEST.md`를 따릅니다. 테스트 스크립트는 리허설 행사를 생성·종료하며 실제 행사를 건드리지 않습니다.

## 9. 보안과 운영 범위

서버는 관리자 허용 목록 + 행사 소유자를 검사합니다. 모든 테이블에 RLS를 켜고 anon/authenticated의 직접 테이블 접근을 차단합니다. 투표는 제한된 SECURITY DEFINER RPC에서 입력을 검증한 뒤 처리합니다. 함수 search_path는 빈 문자열이며 공개 기본 실행 권한을 회수합니다. 이벤트 행 잠금으로 중복 제약·표 기록·카운터 갱신·마감을 직렬화합니다. Broadcast 장애는 투표 저장을 롤백하지 않습니다.

기본 입장 상한은 300명, 신규 입장은 10초당 150명으로 제한하여 100명 일시 입장을 수용하도록 설계했습니다. 한 브라우저 UUID로 행사·회차당 한 표를 보장하지만 브라우저를 바꾸거나 저장소를 지우는 부정 투표까지 막는 인증 수단은 아닙니다. IP와 기기 지문은 수집하지 않습니다. 공개 URL을 대규모 인터넷 투표에 사용하려면 별도 도전 검증·서버 요청 제한을 추가해야 합니다. 현장 소규모 공개 투표용입니다.

무료 플랜을 우선하는 구조지만 무료 한도·휴면 정책·트래픽 비용은 서비스에서 확인하세요. 행사 코드와 집계는 공개 정보로 취급합니다. 실명·연락처·학생 기록은 입력하지 않습니다. 행사 후 보관할 필요가 없으면 Supabase 관리자에서 해당 이벤트를 삭제하면 관련 투표·입장 기록도 함께 삭제됩니다.

## 공식 참고 문서

- Supabase Database Functions: https://supabase.com/docs/guides/database/functions
- Supabase Broadcast: https://supabase.com/docs/guides/realtime/broadcast
- Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase Password Auth: https://supabase.com/docs/guides/auth/passwords
- Supabase Regions: https://supabase.com/docs/guides/platform/regions
- Vercel Vite: https://vercel.com/docs/frameworks/frontend/vite
- Vercel Rewrites: https://vercel.com/docs/routing/rewrites

2026-10-09 개발 시 확인. 서비스 콘솔과 요금·정책은 변경될 수 있습니다.

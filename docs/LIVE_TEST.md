# 실제 서버 동시 투표 시험

이 검사는 Supabase에 연결되어 실행되며 테스트용 리허설 행사를 새로 만듭니다. Auth 관리자로 등록된 강사 테스트 계정이 필요합니다. 실제 수업 행사와 분리된 프로젝트에서 먼저 실행하세요.

PowerShell에서 현재 터미널에만 값을 설정합니다. 비밀번호는 공개 채팅·저장소에 올리지 마세요.

```powershell
$env:TEST_SUPABASE_URL = 'https://프로젝트.supabase.co'
$env:TEST_SUPABASE_ANON_KEY = '공개용_publishable_또는_anon_키'
$env:TEST_HOST_EMAIL = '등록한_강사_이메일'
$secret = Read-Host '강사 테스트 계정 비밀번호' -AsSecureString
$env:TEST_HOST_PASSWORD = [System.Net.NetworkCredential]::new('', $secret).Password
npm run test:live
Remove-Item Env:TEST_HOST_PASSWORD
```

30명, 50명, 100명 각각을 별도 리허설 행사로 생성하고, 투표 Promise를 동시에 실행한 뒤 같은 요청을 재전송합니다. 최종 저장된 합계와 항목별 예상 수치가 일치해야 통과합니다. 테스트 행사는 종료하지만 실패 분석을 위해 기록을 삭제하지 않습니다. 환경변수가 없으면 NOT RUN과 종료 코드 2를 반환합니다.

이 검사는 한 PC의 HTTP 동시 요청입니다. 일본 통신사·LTE·5G, 다수 실제 단말, Realtime UI 지연, Safari 오디오·백그라운드 복구는 별도 실기기 리허설이 필요합니다. `CHECKLIST.md`에 결과를 기록하세요.

서버 에러가 나면 코드에 표시되는 RPC 오류를 먼저 확인합니다. `ADMIN_REQUIRED`는 관리자 UUID 등록, `STATE_CHANGED`는 동시 관리자 조작, `CAPACITY_REACHED`는 행사 상한, `TRY_LATER`는 짧은 시간의 과도한 신규 입장을 의미합니다. 확인 없이 SQL 권한을 전체 공개하는 방식으로 해결하지 마세요.

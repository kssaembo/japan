export type AudioLanguage = 'ko'|'ja';
export interface AudioEntry {id:string;language:AudioLanguage;text:string;path:string;tone:string;pronunciation:string;stage:string;estimatedSeconds:number}
export const audioManifest:AudioEntry[] = [
  {
    "id": "intro",
    "language": "ko",
    "text": "안녕하세요! 오늘 새로 지원한 AI 신입 선생님입니다. 제가 어떤 일을 가장 먼저 하면 좋을까요?",
    "path": "/audio/ko/intro.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "intro",
    "estimatedSeconds": 11
  },
  {
    "id": "intro",
    "language": "ja",
    "text": "こんにちは。本日、面接に参りました、新人のAI先生です。最初にどんな仕事を任せていただけますか。",
    "path": "/audio/ja/intro.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "intro",
    "estimatedSeconds": 8
  },
  {
    "id": "prompt_send",
    "language": "ko",
    "text": "업무 요청을 확인했습니다. 지금부터 미리 준비한 시연을 보여 드리겠습니다.",
    "path": "/audio/ko/prompt_send.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "simulation",
    "estimatedSeconds": 8
  },
  {
    "id": "prompt_send",
    "language": "ja",
    "text": "ご依頼を確認しました。ここからは、あらかじめ用意したデモをご覧ください。",
    "path": "/audio/ja/prompt_send.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "simulation",
    "estimatedSeconds": 6
  },
  {
    "id": "result_intro",
    "language": "ko",
    "text": "미리 만들고 검토한 교육자료입니다. 우리 학교 상황에 맞게 바꾸어 활용해 주세요.",
    "path": "/audio/ko/result_intro.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "result",
    "estimatedSeconds": 9
  },
  {
    "id": "result_intro",
    "language": "ja",
    "text": "事前に作成し、確認した教材です。学校の状況に合わせて調整してお使いください。",
    "path": "/audio/ja/result_intro.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "result",
    "estimatedSeconds": 6
  },
  {
    "id": "winner_lesson",
    "language": "ko",
    "text": "여러분이 선택한 첫 업무는 수업 준비입니다!",
    "path": "/audio/ko/winner_lesson.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_lesson",
    "language": "ja",
    "text": "皆さんに選んでいただいた最初の仕事は、授業の準備です。",
    "path": "/audio/ja/winner_lesson.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "winner",
    "estimatedSeconds": 4
  },
  {
    "id": "winner_homework",
    "language": "ko",
    "text": "여러분이 선택한 첫 업무는 숙제 관리입니다!",
    "path": "/audio/ko/winner_homework.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_homework",
    "language": "ja",
    "text": "皆さんに選んでいただいた最初の仕事は、家庭学習のサポートです。",
    "path": "/audio/ja/winner_homework.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_game",
    "language": "ko",
    "text": "여러분이 선택한 첫 업무는 학습 게임입니다!",
    "path": "/audio/ko/winner_game.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_game",
    "language": "ja",
    "text": "皆さんに選んでいただいた最初の仕事は、学習ゲームです。",
    "path": "/audio/ja/winner_game.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "winner",
    "estimatedSeconds": 4
  },
  {
    "id": "winner_letter",
    "language": "ko",
    "text": "여러분이 선택한 첫 업무는 가정통신문입니다!",
    "path": "/audio/ko/winner_letter.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_letter",
    "language": "ja",
    "text": "皆さんに選んでいただいた最初の仕事は、保護者へのお知らせです。",
    "path": "/audio/ja/winner_letter.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_meeting",
    "language": "ko",
    "text": "여러분이 선택한 첫 업무는 회의 단축입니다!",
    "path": "/audio/ko/winner_meeting.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_meeting",
    "language": "ja",
    "text": "皆さんに選んでいただいた最初の仕事は、会議の効率化です。",
    "path": "/audio/ja/winner_meeting.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_speaking",
    "language": "ko",
    "text": "여러분이 선택한 첫 업무는 한국어 말하기입니다!",
    "path": "/audio/ko/winner_speaking.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "winner_speaking",
    "language": "ja",
    "text": "皆さんに選んでいただいた最初の仕事は、韓国語の会話練習です。",
    "path": "/audio/ja/winner_speaking.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "winner",
    "estimatedSeconds": 5
  },
  {
    "id": "lesson_01",
    "language": "ko",
    "text": "수업자료는 제가 만들겠습니다. 틀린 곳은 꼭 고쳐 주세요. 아직 신입이라 결재 도장이 필요합니다.",
    "path": "/audio/ko/lesson_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 11
  },
  {
    "id": "lesson_01",
    "language": "ja",
    "text": "教材作りはお任せください。でも、間違いのチェックはお願いします。新人なので、先生の確認印が頼りです。",
    "path": "/audio/ja/lesson_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "lesson_02",
    "language": "ko",
    "text": "활동지는 준비됐습니다. 아이들의 반짝이는 눈빛은 선생님께 부탁드립니다.",
    "path": "/audio/ko/lesson_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "lesson_02",
    "language": "ja",
    "text": "プリントはできました。子どもたちの目を輝かせる仕上げは、先生にお願いします。",
    "path": "/audio/ja/lesson_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 6
  },
  {
    "id": "lesson_03",
    "language": "ko",
    "text": "글씨는 크게, 문장은 짧게 만들었습니다. 제 자기소개도 이렇게 줄일 걸 그랬네요.",
    "path": "/audio/ko/lesson_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "lesson_03",
    "language": "ja",
    "text": "文字は大きく、文は短くしました。私の自己紹介も、これくらい短くすればよかったですね。",
    "path": "/audio/ja/lesson_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "lesson_04",
    "language": "ko",
    "text": "자료는 네 가지 준비했습니다. 커피는 못 타지만 선택지는 넉넉히 드립니다.",
    "path": "/audio/ko/lesson_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "lesson_04",
    "language": "ja",
    "text": "教材を四つ用意しました。コーヒーは入れられませんが、選択肢はたっぷりご用意します。",
    "path": "/audio/ja/lesson_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "homework_01",
    "language": "ko",
    "text": "숙제는 아이가 하고, 저는 응원하겠습니다. 제가 다 하면 AI만 공부하잖아요.",
    "path": "/audio/ko/homework_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "homework_01",
    "language": "ja",
    "text": "宿題をするのは子どもたち、私は応援係です。私が全部やったら、勉強するのが私だけになってしまいますから。",
    "path": "/audio/ja/homework_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "homework_02",
    "language": "ko",
    "text": "오늘 미션은 한국어 한마디입니다. 성공하면 저는 마음속으로 박수 백 번 치겠습니다.",
    "path": "/audio/ko/homework_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "homework_02",
    "language": "ja",
    "text": "今日のミッションは、韓国語でひと言。できたら、心の中で百回拍手します。",
    "path": "/audio/ja/homework_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 6
  },
  {
    "id": "homework_03",
    "language": "ko",
    "text": "숙제에 재미를 살짝 넣었습니다. 숙제인 걸 잊어도 배운 말은 기억해 주세요.",
    "path": "/audio/ko/homework_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "homework_03",
    "language": "ja",
    "text": "宿題に、楽しさを少し加えました。宿題だったことは忘れても、覚えた言葉は忘れないでくださいね。",
    "path": "/audio/ja/homework_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "homework_04",
    "language": "ko",
    "text": "스티커판을 준비했습니다. 저도 첫 출근 성공 스티커 하나 받을 수 있을까요?",
    "path": "/audio/ko/homework_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "homework_04",
    "language": "ja",
    "text": "ごほうびシートを用意しました。私にも、初出勤がんばったシールを一枚いただけますか。",
    "path": "/audio/ja/homework_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "game_01",
    "language": "ko",
    "text": "게임을 준비했습니다. 재미있어서 한 판 더 하더라도 한국어로 부탁해 주세요.",
    "path": "/audio/ko/game_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "game_01",
    "language": "ja",
    "text": "ゲームを用意しました。もう一回遊びたくなったら、ぜひ韓国語でお願いしてくださいね。",
    "path": "/audio/ja/game_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "game_02",
    "language": "ko",
    "text": "정답을 맞히면 박수입니다. 틀리면 새로 배웠으니 그것도 박수입니다.",
    "path": "/audio/ko/game_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "game_02",
    "language": "ja",
    "text": "正解したら拍手。間違えても、新しく覚えたので、やっぱり拍手です。",
    "path": "/audio/ja/game_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 5
  },
  {
    "id": "game_03",
    "language": "ko",
    "text": "이번 게임의 진짜 우승자는 한국어를 한 번 더 말한 사람입니다. 저도 참가해도 되나요?",
    "path": "/audio/ko/game_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 10
  },
  {
    "id": "game_03",
    "language": "ja",
    "text": "本当の優勝者は、韓国語をもう一度口にした人です。私も参加していいですか。",
    "path": "/audio/ja/game_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 6
  },
  {
    "id": "game_04",
    "language": "ko",
    "text": "순위는 잠깐이고 배운 낱말은 오래갑니다. 제 이름도 오래 기억해 주시면 좋겠습니다.",
    "path": "/audio/ko/game_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "game_04",
    "language": "ja",
    "text": "順位はその場だけ。でも、覚えた言葉は残ります。私の名前も覚えていただけるとうれしいです。",
    "path": "/audio/ja/game_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "letter_01",
    "language": "ko",
    "text": "한국어와 일본어로 썼습니다. 보내기 전 확인은 부탁드립니다. 첫 출근부터 정정 안내는 피하고 싶습니다.",
    "path": "/audio/ko/letter_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 11
  },
  {
    "id": "letter_01",
    "language": "ja",
    "text": "韓国語と日本語で書きました。送る前の確認をお願いします。初日から訂正のお知らせは、できれば避けたいので。",
    "path": "/audio/ja/letter_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "letter_02",
    "language": "ko",
    "text": "준비물은 또렷하게 적었습니다. 아이들 가방에 기대감도 하나씩 들어가면 좋겠습니다.",
    "path": "/audio/ko/letter_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "letter_02",
    "language": "ja",
    "text": "持ち物は、分かりやすく書きました。子どもたちのかばんに、楽しみな気持ちも入るとうれしいですね。",
    "path": "/audio/ja/letter_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "letter_03",
    "language": "ko",
    "text": "안내문을 짧게 정리했습니다. 중요한 내용이 끝인사 뒤에 숨지 않도록 했습니다.",
    "path": "/audio/ko/letter_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "letter_03",
    "language": "ja",
    "text": "お知らせは短くまとめました。大事な内容が、最後のあいさつの後ろに隠れないようにしました。",
    "path": "/audio/ja/letter_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "letter_04",
    "language": "ko",
    "text": "두 언어로 정성껏 썼습니다. 마음까지 번역됐는지는 선생님이 한 번 봐 주세요.",
    "path": "/audio/ko/letter_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "letter_04",
    "language": "ja",
    "text": "二つの言葉で、心を込めて書きました。気持ちまで伝わるか、先生に見ていただけると安心です。",
    "path": "/audio/ja/letter_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "meeting_01",
    "language": "ko",
    "text": "회의는 짧게, 결정은 분명하게 정리했습니다. 제 면접도 곧 합격 발표인가요?",
    "path": "/audio/ko/meeting_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "meeting_01",
    "language": "ja",
    "text": "会議は短く、決定事項ははっきりとまとめました。私の面接も、そろそろ合格発表でしょうか。",
    "path": "/audio/ja/meeting_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "meeting_02",
    "language": "ko",
    "text": "십 분 회의를 준비했습니다. 다만 중요한 이야기는 시계 눈치를 보지 않아도 됩니다.",
    "path": "/audio/ko/meeting_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "meeting_02",
    "language": "ja",
    "text": "十分で進める会議を用意しました。でも、大切な話には、時計を気にせず向き合ってくださいね。",
    "path": "/audio/ja/meeting_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "meeting_03",
    "language": "ko",
    "text": "누가, 무엇을, 언제까지인지 적었습니다. 누가 간식을 가져오는지는 이번 안건에 없었습니다.",
    "path": "/audio/ko/meeting_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 10
  },
  {
    "id": "meeting_03",
    "language": "ja",
    "text": "誰が、何を、いつまでにするかを書きました。おやつの担当は、今回の議題には入っていませんでした。",
    "path": "/audio/ja/meeting_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "meeting_04",
    "language": "ko",
    "text": "회의록을 정리했습니다. 이제 기억력보다 확인 버튼을 믿어도 되겠습니다.",
    "path": "/audio/ko/meeting_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "meeting_04",
    "language": "ja",
    "text": "議事録をまとめました。これで、記憶をたどるより、記録を確認するほうが早くなりそうです。",
    "path": "/audio/ja/meeting_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "speaking_01",
    "language": "ko",
    "text": "아이들의 말문을 열어 보겠습니다. 제가 더 많이 말하면 저부터 조용히 시켜 주세요.",
    "path": "/audio/ko/speaking_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "speaking_01",
    "language": "ja",
    "text": "子どもたちが話し始めるお手伝いをします。私のほうがしゃべりすぎたら、先に私を止めてくださいね。",
    "path": "/audio/ja/speaking_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "speaking_02",
    "language": "ko",
    "text": "오늘 목표는 완벽한 발음보다 반가운 한마디입니다. 저부터 말할게요. 반가워요!",
    "path": "/audio/ko/speaking_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "speaking_02",
    "language": "ja",
    "text": "今日の目標は、完璧な発音より、気持ちの伝わるひと言です。まずは私から。お会いできてうれしいです。",
    "path": "/audio/ja/speaking_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "speaking_03",
    "language": "ko",
    "text": "대화 카드를 준비했습니다. 정답만 있는 대화보다 서로 알아가는 대화가 좋겠습니다.",
    "path": "/audio/ko/speaking_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "speaking_03",
    "language": "ja",
    "text": "会話カードを用意しました。正解を探すだけでなく、お互いのことを知る会話になるといいですね。",
    "path": "/audio/ja/speaking_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "speaking_04",
    "language": "ko",
    "text": "천천히 말해도 괜찮습니다. 기다리는 시간도 대화의 일부니까요. 저도 대기 모드는 잘합니다.",
    "path": "/audio/ko/speaking_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 10
  },
  {
    "id": "speaking_04",
    "language": "ja",
    "text": "ゆっくり話しても大丈夫です。待つ時間も会話の一部ですから。待機モードなら、私も得意です。",
    "path": "/audio/ja/speaking_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  }
];

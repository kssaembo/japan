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
    "text": "활동지는 준비됐습니다. 아이들이 제가 준비한 활동지를 좋아하겠죠? 제발 그렇다고 말해주세요.",
    "path": "/audio/ko/lesson_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "lesson_02",
    "language": "ja",
    "text": "プリントはできました。子どもたちも気に入ってくれますよね？　お願いです、そう言ってください。",
    "path": "/audio/ja/lesson_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 6
  },
  {
    "id": "lesson_03",
    "language": "ko",
    "text": "글씨는 크게, 문장은 짧게 만들었습니다. 강사님 자기소개도 이렇게 해보세요.",
    "path": "/audio/ko/lesson_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "lesson_03",
    "language": "ja",
    "text": "文字は大きく、文は短くしました。講師の先生も自己紹介で試してみてください。",
    "path": "/audio/ja/lesson_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "lesson_04",
    "language": "ko",
    "text": "자료를 많이 준비했습니다. 강사님이 어제 드신 치킨만큼 말이죠.",
    "path": "/audio/ko/lesson_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "lesson_04",
    "language": "ja",
    "text": "教材をたっぷり用意しました。講師の先生が昨日食べたチキンくらい、たっぷりです。",
    "path": "/audio/ja/lesson_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "homework_01",
    "language": "ko",
    "text": "숙제는 아이가 하고, 저는 응원하겠습니다. 제가 다 하면 AI만 공부하잖아요. 저는 충분히 똑똑하다고요.",
    "path": "/audio/ko/homework_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "homework_01",
    "language": "ja",
    "text": "宿題は子どもたちがやって、私は応援します。私が全部やったら、勉強するのはAIだけ。私はもう十分賢いですから。",
    "path": "/audio/ja/homework_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "homework_02",
    "language": "ko",
    "text": "오늘 미션은 한국어 한마디입니다. 부모님 말씀을 잘 안 듣는다면 한마디가 백마디가 되겠죠?",
    "path": "/audio/ko/homework_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "homework_02",
    "language": "ja",
    "text": "今日のミッションは、韓国語でひと言。親御さんの言うことを聞かなかったら、そのひと言が百言になるかもしれませんね。",
    "path": "/audio/ja/homework_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 6
  },
  {
    "id": "homework_03",
    "language": "ko",
    "text": "숙제는 언제나 즐겁고 행복하답니다. 어차피 제 숙제가 아닌걸요.",
    "path": "/audio/ko/homework_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "homework_03",
    "language": "ja",
    "text": "宿題って、いつも楽しくて幸せですよね。だって、私の宿題じゃありませんから。",
    "path": "/audio/ja/homework_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "homework_04",
    "language": "ko",
    "text": "즐거운 숙제를 준비했습니다. 학생에게 제가 만들었다고 이야기하지는 말아주세요.",
    "path": "/audio/ko/homework_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "homework_04",
    "language": "ja",
    "text": "楽しい宿題を用意しました。子どもたちには、私が作ったことは内緒にしてくださいね。",
    "path": "/audio/ja/homework_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "game_01",
    "language": "ko",
    "text": "게임을 준비했습니다. 재미없어도 재미있다고 해야 예의라고 배웠습니다.",
    "path": "/audio/ko/game_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "game_01",
    "language": "ja",
    "text": "ゲームを用意しました。たとえ面白くなくても、面白いと言うのが礼儀だと習いました。",
    "path": "/audio/ja/game_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "game_02",
    "language": "ko",
    "text": "정답을 맞히면 박수를 치겠습니다. 아~ 저는 손이 없는데 생각이 짧았네요.",
    "path": "/audio/ko/game_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "game_02",
    "language": "ja",
    "text": "正解したら拍手します。あ、私には手がないんでした。うっかりしていました。",
    "path": "/audio/ja/game_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 5
  },
  {
    "id": "game_03",
    "language": "ko",
    "text": "이번 게임의 진짜 우승자는 누구일까요? 제가 참여한다면 어차피 제가 우승자겠죠.",
    "path": "/audio/ko/game_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 10
  },
  {
    "id": "game_03",
    "language": "ja",
    "text": "このゲームの本当の優勝者は誰でしょう？　私が参加したら、やっぱり私でしょうね。",
    "path": "/audio/ja/game_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 6
  },
  {
    "id": "game_04",
    "language": "ko",
    "text": "순위는 잠깐이고 배운 낱말은 오래갑니다. 제 이름도 오래 기억해 주시면 좋겠습니다. 근데 제 이름이 뭐죠?",
    "path": "/audio/ko/game_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "game_04",
    "language": "ja",
    "text": "順位は一瞬、覚えた言葉はずっと残ります。私の名前も覚えてくださいね。ところで、私の名前は何でしたっけ？",
    "path": "/audio/ja/game_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "letter_01",
    "language": "ko",
    "text": "한국어와 일본어로 썼습니다. 절 만드신 분이 한국어 밖에 못해서.. 일본어가 맞는지는 확인해 주세요.",
    "path": "/audio/ko/letter_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 11
  },
  {
    "id": "letter_01",
    "language": "ja",
    "text": "韓国語と日本語で書きました。私を作った人は韓国語しかできないので……日本語が合っているか確認してくださいね。",
    "path": "/audio/ja/letter_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "letter_02",
    "language": "ko",
    "text": "가정통신문은 확실하게 적었습니다. 그런데 가정통신문이 뭐죠?",
    "path": "/audio/ko/letter_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "letter_02",
    "language": "ja",
    "text": "家庭へのおたよりは、しっかり書きました。でも……「家庭へのおたより」って何ですか？",
    "path": "/audio/ja/letter_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "letter_03",
    "language": "ko",
    "text": "안내문을 짧게 정리했습니다. 강사님은 제가 고생하는걸 알고 있겠죠?",
    "path": "/audio/ko/letter_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "letter_03",
    "language": "ja",
    "text": "お知らせを短くまとめました。講師の先生、私が頑張ったことに気づいてくれますよね？",
    "path": "/audio/ja/letter_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "letter_04",
    "language": "ko",
    "text": "두 언어로 정성껏 썼습니다. 부족한 강사님 때문에 제가 2개 국어를 하게 되었네요.",
    "path": "/audio/ko/letter_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "letter_04",
    "language": "ja",
    "text": "二つの言葉で心を込めて書きました。講師の先生のおかげで、私も二か国語を話す羽目になりましたよ。",
    "path": "/audio/ja/letter_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "meeting_01",
    "language": "ko",
    "text": "회의는 짧게, 잔소리도 짧게라고 배웠습니다. 지금 이 글을 보는 당신!! 찔리시나요?",
    "path": "/audio/ko/meeting_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "meeting_01",
    "language": "ja",
    "text": "会議もお説教も短く、と習いました。今これを見ているあなた……心当たり、ありますか？",
    "path": "/audio/ja/meeting_01.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "meeting_02",
    "language": "ko",
    "text": "회의와 강의는 예정된 시간보다 일찍 끝나는게 좋다. 강사님은 알고 있을까?",
    "path": "/audio/ko/meeting_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "meeting_02",
    "language": "ja",
    "text": "会議も講義も、予定より早く終わるのが一番。講師の先生はご存じでしょうか？",
    "path": "/audio/ja/meeting_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  },
  {
    "id": "meeting_03",
    "language": "ko",
    "text": "회의 단축을 해야 합니다. 그래야 저도 빨리 퇴근하고 chatGPT랑 수다를 떨거든요.",
    "path": "/audio/ko/meeting_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 10
  },
  {
    "id": "meeting_03",
    "language": "ja",
    "text": "会議は短くしないと。私も早く帰って、ChatGPTとおしゃべりしたいんです。",
    "path": "/audio/ja/meeting_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "meeting_04",
    "language": "ko",
    "text": "회의록을 정리했습니다. 강사님! 이제 퇴근 좀 시켜주세요...",
    "path": "/audio/ko/meeting_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "meeting_04",
    "language": "ja",
    "text": "議事録をまとめました。講師の先生、そろそろ帰らせてください……。",
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
    "text": "아이들의 말하기 잘 들리지 않아요!! 아.. 저는 귀가 없군요.",
    "path": "/audio/ko/speaking_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "speaking_02",
    "language": "ja",
    "text": "子どもたちの声がよく聞こえません！　あ……私には耳がないんでした。",
    "path": "/audio/ja/speaking_02.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "speaking_03",
    "language": "ko",
    "text": "열심히 공부할 여러분을 생각하며 문제를 3000개 만들었습니다. 아! 돌 던지지 마세요.",
    "path": "/audio/ko/speaking_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 9
  },
  {
    "id": "speaking_03",
    "language": "ja",
    "text": "皆さんが一生懸命勉強できるように、問題を三千問作りました。あ、石を投げないでください！",
    "path": "/audio/ja/speaking_03.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 8
  },
  {
    "id": "speaking_04",
    "language": "ko",
    "text": "천천히 말해도 괜찮습니다. 어차피 저한테 남는 건 시간 밖에 없답니다. 전 퇴근 시간이 없어요.",
    "path": "/audio/ko/speaking_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 에이아이로 읽기. 한국어 존댓말 어미를 부드럽게.",
    "stage": "remark",
    "estimatedSeconds": 10
  },
  {
    "id": "speaking_04",
    "language": "ja",
    "text": "ゆっくり話しても大丈夫です。私にあるのは時間だけですから。退勤時間もないんです。",
    "path": "/audio/ja/speaking_04.mp3",
    "tone": "친근하고 자신 있는 신입 교사. 반전 직전 짧게 쉬고, 과장된 웃음은 넣지 않음.",
    "pronunciation": "AI는 エーアイ. 일본 표준어의 자연스러운 악센트. 한국어 고유명사는 대본 의미를 확인.",
    "stage": "remark",
    "estimatedSeconds": 7
  }
];

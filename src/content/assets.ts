export type AssetView={label:string;ja:string;kind:'image'|'html'|'video';file:string};
export type AssetDownload={label:string;ja:string;file:string;name:string};
export type SuppliedAsset={cover:string;views:AssetView[];downloads:AssetDownload[]};
const image=(label:string,ja:string,file:string):AssetView=>({label,ja,kind:'image',file});
const html=(label:string,ja:string,file:string):AssetView=>({label,ja,kind:'html',file});
const download=(label:string,ja:string,file:string,name:string):AssetDownload=>({label,ja,file,name});
export const suppliedAssets:Record<string,SuppliedAsset>={
 lesson_01:{cover:'cover.webp',views:[image('학생 활동지','児童用プリント','worksheet-1.jpg'),image('교사용 정답지','教師用解答','worksheet-2.jpg'),image('프로젝터 자료','投影用教材','projector.png')],downloads:[download('활동지 PDF','プリント PDF','worksheet.pdf','우리_교실_낱말_탐험.pdf')]},
 homework_01:{cover:'cover.webp',views:[html('미션 체크','ミッションチェック','mission.html'),image('주간 미션표','週間ミッション表','mission-1.jpg'),image('교사용 자료','教師用資料','mission-2.jpg')],downloads:[download('미션 PDF','ミッション PDF','mission.pdf','일주일_한국어_미션.pdf'),download('미션 HTML','ミッション HTML','mission.html','일주일_한국어_미션.html')]},
 game_01:{cover:'cover.webp',views:[html('게임 실행','ゲームを始める','game.html')],downloads:[download('게임 HTML','ゲーム HTML','game.html','한국어_OX_도전.html')]},
 letter_01:{cover:'cover.webp',views:[image('한일 안내문','日韓のおたより','letter-1.jpg'),image('교사용 확인','教師用確認資料','letter-2.jpg'),html('문서 원본','文書の原本','letter.html')],downloads:[download('안내문 PDF','おたより PDF','letter.pdf','추석_문화체험_안내문.pdf'),download('편집용 HTML','編集用 HTML','letter.html','추석_문화체험_안내문.html')]},
 meeting_01:{cover:'cover.webp',views:[html('회의 체크표','会議チェック表','meeting.html'),image('회의 운영안','会議進行案','meeting-1.jpg'),image('교사용 확인','教師用確認資料','meeting-2.jpg')],downloads:[download('회의 PDF','会議 PDF','meeting.pdf','10분_교사회의_운영안.pdf'),download('편집용 Word','編集用 Word','meeting.docx','10분_교사회의_편집용.docx'),download('체크표 HTML','チェック表 HTML','meeting.html','10분_교사회의_체크표.html')]},
 speaking_01:{cover:'cover.webp',views:[{label:'영상 재생',ja:'動画を再生',kind:'video',file:'animation.mp4'},...Array.from({length:4},(_,i)=>image(`상황극 ${i+1}`,`会話シーン ${i+1}`,i===0?'slide-1.webp':`slide-${i+1}.png`)),image('역할극 카드','ロールプレイカード','rolecards-1.jpg'),image('교사용 확인','教師用確認資料','rolecards-2.jpg')],downloads:[download('역할극 PDF','会話カード PDF','rolecards.pdf','한국어_자기소개_역할극_카드.pdf'),download('슬라이드 PDF','スライド PDF','slides.pdf','한국어_자기소개_슬라이드.pdf'),download('영상 MP4','動画 MP4','animation.mp4','한국어_자기소개_애니메이션.mp4'),download('원본 HTML','原本 HTML','slides.html','한국어_자기소개_슬라이드.html')]}
};
export const assetUrl=(id:string,file:string)=>`/materials/${id}/${file}`;

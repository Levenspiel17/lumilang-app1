<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>오프라인 - LUMILang</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh; background: #0f0e17; color: #fffffe;
      font-family: 'Nunito', sans-serif;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; padding: 24px;
    }
    .icon { font-size: 72px; margin-bottom: 24px; }
    h1 { font-size: 28px; font-weight: 900; margin-bottom: 12px; }
    p { color: #a8a4c3; font-size: 15px; line-height: 1.6; margin-bottom: 32px; }
    .tip {
      background: rgba(155,93,229,0.1); border: 1px solid rgba(155,93,229,0.3);
      border-radius: 16px; padding: 20px 24px; margin-bottom: 32px; max-width: 320px;
    }
    .tip h3 { color: #9b5de5; font-size: 14px; margin-bottom: 8px; }
    .tip p { color: #fffffe; font-size: 13px; margin-bottom: 0; }
    button {
      background: #9b5de5; color: white; border: none;
      padding: 14px 32px; border-radius: 14px;
      font-size: 15px; font-weight: 800; cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="icon">📡</div>
  <h1>인터넷 연결 없음</h1>
  <p>현재 오프라인 상태입니다.<br/>이미 저장된 단어와 학습 내용은 계속 이용할 수 있어요!</p>
  <div class="tip">
    <h3>💡 오프라인에서도 가능한 것</h3>
    <p>저장된 단어 카드 복습, 이전 대화 확인, 퀴즈 풀기 (저장된 문제)</p>
  </div>
  <button onclick="window.location.reload()">다시 시도하기</button>
</body>
</html>

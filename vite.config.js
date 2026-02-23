<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#9b5de5" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="LUMILang" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="apple-touch-icon" href="/icon-192.png" />
  <title>LUMILang - AI 다국어 학습</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #0f0e17; }
    #splash {
      position: fixed; inset: 0; background: #0f0e17;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 16px;
      z-index: 9999; transition: opacity 0.6s ease;
    }
    #splash.hidden { opacity: 0; pointer-events: none; }
    .splash-logo {
      font-family: 'Nunito', sans-serif;
      font-size: 52px; font-weight: 900; color: #fffffe; letter-spacing: -1px;
    }
    .splash-logo span { color: #ffd166; }
    .splash-sub { color: #a8a4c3; font-family: sans-serif; font-size: 15px; }
    .splash-spinner {
      width: 36px; height: 36px;
      border: 3px solid rgba(155,93,229,0.25);
      border-top-color: #9b5de5; border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div id="splash">
    <div class="splash-logo">LUMI<span>Lang</span></div>
    <div class="splash-sub">AI 다국어 학습</div>
    <div class="splash-spinner"></div>
  </div>

  <div id="root"></div>

  <script>
    // Service Worker 등록
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(r => console.log('[SW] registered:', r.scope))
          .catch(e => console.warn('[SW] failed:', e));
      });
    }
    // 스플래시 숨기기
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('splash')?.classList.add('hidden');
      }, 1000);
    });
    // PWA 설치 프롬프트 저장
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      window.__pwaPrompt = e;
    });
    window.__isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    window.__isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  </script>

  <script type="module" src="/src/main.jsx"></script>
</body>
</html>

{
  "name": "LUMILang - AI 언어 학습",
  "short_name": "LUMILang",
  "description": "AI 기반 다국어 학습 앱 - 영어, 일본어, 중국어 등 15개 언어",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#0f0e17",
  "theme_color": "#9b5de5",
  "lang": "ko",
  "scope": "/",
  "categories": ["education", "productivity"],
  "icons": [
    { "src": "/icons/icon-72x72.png",   "sizes": "72x72",   "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-96x96.png",   "sizes": "96x96",   "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-128x128.png", "sizes": "128x128", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-144x144.png", "sizes": "144x144", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-152x152.png", "sizes": "152x152", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-384x384.png", "sizes": "384x384", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ],
  "screenshots": [
    { "src": "/screenshots/screen1.png", "sizes": "390x844", "type": "image/png", "label": "홈 화면 - 주제 및 모드 선택" },
    { "src": "/screenshots/screen2.png", "sizes": "390x844", "type": "image/png", "label": "AI 튜터와 대화" },
    { "src": "/screenshots/screen3.png", "sizes": "390x844", "type": "image/png", "label": "단어 퀴즈" }
  ],
  "shortcuts": [
    {
      "name": "단어 학습",
      "short_name": "단어",
      "url": "/?mode=vocab",
      "icons": [{ "src": "/icons/icon-96x96.png", "sizes": "96x96" }]
    },
    {
      "name": "AI 튜터",
      "short_name": "AI",
      "url": "/?mode=ai",
      "icons": [{ "src": "/icons/icon-96x96.png", "sizes": "96x96" }]
    }
  ],
  "prefer_related_applications": false,
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.lumilang.app"
    }
  ]
}

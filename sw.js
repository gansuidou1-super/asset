// 資産ダッシュボード用の最小構成サービスワーカー。
// 常に最新の資産データを見せたいので、内容は基本キャッシュせずネットワークをそのまま通す。
// (Android等での「ホーム画面に追加」の条件を満たすために設置しています)

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

if('serviceWorker' in navigator) navigator.serviceWorker.register('/portfolio/dev-sw.js?dev-sw', { scope: '/portfolio/', type: 'classic' })
// 파이어베이스 메시징을 위한 서비스 워커
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js',
);

// 서비스워커에서 사용할 파이어베이스 설정
firebase.initializeApp({
  apiKey: 'AIzaSyCvXb1godlEjfPaEjOVklc7GICxxzoFXOE',
  authDomain: 'boardsignal-71515.firebaseapp.com',
  projectId: 'boardsignal-71515',
  storageBucket: 'boardsignal-71515.appspot.com',
  messagingSenderId: '587928993354',
  appId: '1:587928993354:web:37f912c037d52f69aef0b3',
  measurementId: 'G-JVV5FGH9X7',
});

// 백그라운드에서 메시지를 처리할 수 있도록 인스턴스를 생성하고 이벤트를 등록
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };
  return self.registration.showNotification(title, options);
});

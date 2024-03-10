// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js',
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCvXb1godlEjfPaEjOVklc7GICxxzoFXOE',
  authDomain: 'boardsignal-71515.firebaseapp.com',
  projectId: 'boardsignal-71515',
  storageBucket: 'boardsignal-71515.appspot.com',
  messagingSenderId: '587928993354',
  appId: '1:587928993354:web:37f912c037d52f69aef0b3',
  measurementId: 'G-JVV5FGH9X7',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  const title = '보드시그널';
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };
  return self.registration.showNotification(title, options);
});

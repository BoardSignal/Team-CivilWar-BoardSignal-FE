import { useEffect } from 'react';

import firebase from 'firebase/app';
import 'firebase/messaging';

import { usePostFcmTokenApi } from '@/apis/postFcmToken';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY;

const useFcmToken = () => {
  const postApi = usePostFcmTokenApi();

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }

    const messaging = firebase.messaging();
    const isAuthenticated = localStorage.getItem('accessToken');
    const savedFcmToken = localStorage.getItem('fcmToken');

    isAuthenticated &&
      messaging.getToken({ vapidKey: VAPID_KEY }).then(currentToken => {
        if (currentToken) {
          if (savedFcmToken !== currentToken) {
            localStorage.setItem('fcmToken', currentToken);
            postApi({ token: currentToken });
          }
        }
      });

    messaging.onMessage(payload => {
      const title = '보드시그널';
      const options = {
        body: payload.notification.body,
        icon: payload.notification.icon,
      };
      new Notification(title, options);
    });
  }, [postApi]);
};

export default useFcmToken;

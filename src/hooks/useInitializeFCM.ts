import { useEffect } from 'react';

import firebase from 'firebase/app';
import 'firebase/messaging';

import { usePostFCMTokenApi } from '@/apis/FCMToken';
import { STORAGE_KEY_FCM_TOKEN } from '@/constants/storageKeys';

interface FirebaseMessagePayload {
  notification: {
    title: string;
    body: string;
    icon: string;
  };
}

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
const isLoggedIn = localStorage.getItem('accessToken');

const firebaseInitialized = () => {
  firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);
};

const usePostFCMToken = () => {
  const postFCMTokenApi = usePostFCMTokenApi();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const updateFCMToken = (issuedFCMToken: string) => {
      const savedFCMToken = localStorage.getItem(STORAGE_KEY_FCM_TOKEN);
      if (issuedFCMToken && savedFCMToken !== issuedFCMToken) {
        postFCMTokenApi({ token: issuedFCMToken });
        localStorage.setItem(STORAGE_KEY_FCM_TOKEN, issuedFCMToken);
      }
    };

    firebaseInitialized();

    const messaging = firebase.messaging();
    messaging.getToken({ vapidKey: VAPID_KEY }).then(updateFCMToken);
    const foregroundMessageHandler = (payload: FirebaseMessagePayload) => {
      const title = payload.notification.title;
      const options = {
        body: payload.notification.body,
        icon: payload.notification.icon,
      };
      new Notification(title, options);
    };

    messaging.onMessage(foregroundMessageHandler);
  }, [postFCMTokenApi]);
};

export default usePostFCMToken;

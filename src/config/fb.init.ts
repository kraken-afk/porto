import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import process from 'node:process';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function firebaseInit(): Analytics {
  require('dotenv').config();

  const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGE_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
  } = process.env;


  const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGE_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getAnalytics(app);
}
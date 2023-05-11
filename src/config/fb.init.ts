import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function firebaseInit(): Analytics {
  const firebaseConfig = {
    apiKey: "AIzaSyAvOlPlYlbq8fE51a-f7Ui5AHUlvPBM2qM",
    authDomain: "blazing-base-d3a51.firebaseapp.com",
    projectId: "blazing-base-d3a51",
    storageBucket: "blazing-base-d3a51.appspot.com",
    messagingSenderId: "798041985405",
    appId: "1:798041985405:web:8a4116a48f73b327f67c14",
    measurementId: "G-4GYR3RR9NZ"
  };


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
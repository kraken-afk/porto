import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function firebaseInit(): Analytics {
  // const {
  //   API_KEY,
  //   AUTH_DOMAIN,
  //   PROJECT_ID,
  //   STORAGE_BUCKET,
  //   MESSAGE_SENDER_ID,
  //   APP_ID,
  //   MEASUREMENT_ID
  // } = process.env;


  const firebaseConfig = {
    apiKey: "AIzaSyAvOlPlYlbq8fE51a-f7Ui5AHUlvPBM2qM",
    authDomain: "blazing-base-d3a51.firebaseapp.com",
    projectId: "blazing-base-d3a51",
    storageBucket: "blazing-base-d3a51.appspot.com",
    messagingSenderId: "798041985405",
    appId: "1:798041985405:web:353389182e05faf5f67c14",
    measurementId: "G-WR36E21CBC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getAnalytics(app);
}
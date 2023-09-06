/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLx2oxI08HdpZPPw8fAZ0kmjJGS7bArUo",
  authDomain: "admp-36279.firebaseapp.com",
  projectId: "admp-36279",
  storageBucket: "admp-36279.appspot.com",
  messagingSenderId: "68222178574",
  appId: "1:68222178574:web:fa287652294e97f356f35f",
  measurementId: "G-K17H58YTB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
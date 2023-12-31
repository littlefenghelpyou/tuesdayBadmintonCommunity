// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa7Lv81lIWmxMH2PbqMRXbCH05IaVmT0Q",
  authDomain: "tuesdaybadmintonclub.firebaseapp.com",
  databaseURL: "https://tuesdaybadmintonclub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tuesdaybadmintonclub",
  storageBucket: "tuesdaybadmintonclub.appspot.com",
  messagingSenderId: "593018387081",
  appId: "1:593018387081:web:7f9a5b673fd45adfdda458",
  measurementId: "G-LM6JR41WPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
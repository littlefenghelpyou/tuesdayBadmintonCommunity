// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFg8-M3MyXd8FnexAAcYQ39x-FdQwiuAY",
  authDomain: "tuesdaybadmitoncommunity.firebaseapp.com",
  databaseURL: "https://tuesdaybadmitoncommunity-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tuesdaybadmitoncommunity",
  storageBucket: "tuesdaybadmitoncommunity.appspot.com",
  messagingSenderId: "1091363769556",
  appId: "1:1091363769556:web:35a04d1bc25fdb7a237f41",
  measurementId: "G-8N3HS6PFDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
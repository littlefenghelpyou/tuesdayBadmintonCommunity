// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ7XagVu6pll_aVn8TSPUwA-9oXGr2vXM",
  authDomain: "tuesdaybadmintoncommunity.firebaseapp.com",
  projectId: "tuesdaybadmintoncommunity",
  storageBucket: "tuesdaybadmintoncommunity.appspot.com",
  messagingSenderId: "376854996654",
  appId: "1:376854996654:web:257e1dba8f31bfbbf92f3f",
  measurementId: "G-Z6T9J3WFNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
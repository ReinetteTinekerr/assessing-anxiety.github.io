// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6tn5QX5yyPwcnhMe3LwLg6Xs47CfrfLY",
  authDomain: "assesing-anxiety.firebaseapp.com",
  projectId: "assesing-anxiety",
  storageBucket: "assesing-anxiety.appspot.com",
  messagingSenderId: "367058042361",
  appId: "1:367058042361:web:4561fd7b690debb3625128",
  measurementId: "G-N32PC56CW4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };

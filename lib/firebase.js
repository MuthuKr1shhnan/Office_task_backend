// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVwhW3Mxm7_9WdL2qfpxmGvA1TRX5-WZQ",
  authDomain: "officeproject-35453.firebaseapp.com",
  projectId: "officeproject-35453",
  storageBucket: "officeproject-35453.firebasestorage.app",
  messagingSenderId: "752711202930",
  appId: "1:752711202930:web:971bb8850a3691ff716aeb",
  measurementId: "G-ZEND62FKEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbT14esbvf4UTF31vjOo-WlrrkICleDSw",
  authDomain: "fitness-tracker-794c8.firebaseapp.com",
  projectId: "fitness-tracker-794c8",
  storageBucket: "fitness-tracker-794c8.firebasestorage.app",
  messagingSenderId: "467948133766",
  appId: "1:467948133766:web:09e43c15935c35a4a02007",
  measurementId: "G-TJCJQ02TE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
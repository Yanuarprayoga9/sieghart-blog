// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "sighartblog.firebaseapp.com",
  projectId: "sighartblog",
  storageBucket: "sighartblog.appspot.com",
  messagingSenderId: "139879236801",
  appId: "1:139879236801:web:10d7f40028e93a1d8f0040",
  measurementId: "G-3EVW0TT60Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

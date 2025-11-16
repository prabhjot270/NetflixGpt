// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQkSUItXyyiCsic6Ujtr1zzHZVcdbORuY",
  authDomain: "netflixgpt-d537a.firebaseapp.com",
  projectId: "netflixgpt-d537a",
  storageBucket: "netflixgpt-d537a.firebasestorage.app",
  messagingSenderId: "877680074295",
  appId: "1:877680074295:web:1c0403bca58b0c217569b2",
  measurementId: "G-5Z7GB82MER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

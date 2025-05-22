import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa6WkPGhGp59fi1vPQPpwkU3iLxk48duA",
  authDomain: "cidadeintegra.firebaseapp.com",
  projectId: "cidadeintegra",
  storageBucket: "cidadeintegra.firebasestorage.app",
  messagingSenderId: "677900581774",
  appId: "1:677900581774:web:55b7f22512b4a4e06682df",
  measurementId: "G-QZT88Y8C4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
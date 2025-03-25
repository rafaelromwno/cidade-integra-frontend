// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgOK-amwIQIOVFlktGsX6pu2LTbeEyL18",
  authDomain: "cidadeunida-3ce06.firebaseapp.com",
  projectId: "cidadeunida-3ce06",
  storageBucket: "cidadeunida-3ce06.firebasestorage.app",
  messagingSenderId: "248807744910",
  appId: "1:248807744910:web:51d7624d93141b340b30df",
  measurementId: "G-CRVP5ZN46W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
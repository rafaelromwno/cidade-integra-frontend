import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
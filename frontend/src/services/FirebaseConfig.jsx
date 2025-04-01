import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6Oe5ZZzSm8Qat9hLvIjkSD8B3baGpcoo",
  authDomain: "cidade-unida-cadastro.firebaseapp.com",
  projectId: "cidade-unida-cadastro",
  storageBucket: "cidade-unida-cadastro.firebasestorage.app",
  messagingSenderId: "385340724220",
  appId: "1:385340724220:web:0c7fd7c981e50b211b1879",
  measurementId: "G-6B6B00JMM0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

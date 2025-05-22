import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCa6WkPGhGp59fi1vPQPpwkU3iLxk48duA",
  authDomain: "cidadeintegra.firebaseapp.com",
  projectId: "cidadeintegra",
  storageBucket: "cidadeintegra.firebasestorage.app",
  messagingSenderId: "677900581774",
  appId: "1:677900581774:web:55b7f22512b4a4e06682df",
  measurementId: "G-QZT88Y8C4F"
};

// inicializa o Firebase
const app = initializeApp(firebaseConfig);

// inicializa o App Check com o reCAPTCHA v3
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LenGRErAAAAAG8XpxqZKaWvu9YiL-p8lukrrauE"),

  // habilita a atualização automática do token
  isTokenAutoRefreshEnabled: true,
});

export default app;
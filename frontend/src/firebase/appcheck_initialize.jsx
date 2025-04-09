import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBgOK-amwIQIOVFlktGsX6pu2LTbeEyL18",
    authDomain: "cidadeunida-3ce06.firebaseapp.com",
    projectId: "cidadeunida-3ce06",
    storageBucket: "cidadeunida-3ce06.firebasestorage.app",
    messagingSenderId: "248807744910",
    appId: "1:248807744910:web:51d7624d93141b340b30df",
    measurementId: "G-CRVP5ZN46W"
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
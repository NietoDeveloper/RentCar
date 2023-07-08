  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCRX1Tr27I-Uy2E7XGj1RAfEJo8EUD96Ng",
    authDomain: "supcar-99c1f.firebaseapp.com",
    projectId: "supcar-99c1f",
    storageBucket: "supcar-99c1f.appspot.com",
    messagingSenderId: "516348673868",
    appId: "1:516348673868:web:f65e568ab413daca8859e9",
    measurementId: "G-L5K1R81VMH"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

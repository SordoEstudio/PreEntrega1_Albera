import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASEdZ51NAgZqmD1vRdwaWBofLVZrA323k",
  authDomain: "pablo-albera-entrega-coder.firebaseapp.com",
  projectId: "pablo-albera-entrega-coder",
  storageBucket: "pablo-albera-entrega-coder.appspot.com",
  messagingSenderId: "1051803083182",
  appId: "1:1051803083182:web:ab6c5e10b6a6728451283f",
  measurementId: "G-73VP76SYC9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

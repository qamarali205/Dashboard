import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0jioSp5aE9rD0fUdMmDvjbnpqHfyXJjg",
    authDomain: "dashboard-1-153c6.firebaseapp.com",
    projectId: "dashboard-1-153c6",
    storageBucket: "dashboard-1-153c6.appspot.com",
    messagingSenderId: "713293182315",
    appId: "1:713293182315:web:96ddc6ad6445609847c82e",
    measurementId: "G-W28N97VN14"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
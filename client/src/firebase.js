// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mernestate-d0715.firebaseapp.com",
    projectId: "mernestate-d0715",
    storageBucket: "mernestate-d0715.appspot.com",
    messagingSenderId: "596542315319",
    appId: "1:596542315319:web:584a309cdc5c94861cd8b2",
    measurementId: "G-HZDWTQX7LK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
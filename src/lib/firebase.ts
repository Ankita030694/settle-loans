import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.DB_API_KEY,
    authDomain: "settle-loan.firebaseapp.com",
    projectId: "settle-loan",
    storageBucket: "settle-loan.firebasestorage.app",
    messagingSenderId: "203471922593",
    appId: "1:203471922593:web:0453f2777a5218951457e0",
    measurementId: "G-RJHYN1MW8T"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Analytics is only supported in the browser
const analytics = typeof window !== 'undefined' ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;

export { app, db, analytics };

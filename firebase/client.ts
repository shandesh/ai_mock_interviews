// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore}  from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH1ZONej_5W3r8R4DcNREjXWHDGEL9iKg",
    authDomain: "prepmahuwa.firebaseapp.com",
    projectId: "prepmahuwa",
    storageBucket: "prepmahuwa.firebasestorage.app",
    messagingSenderId: "829205949470",
    appId: "1:829205949470:web:c1f0ad0e6032259267120f",
    measurementId: "G-6PR2SYWMRJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app)
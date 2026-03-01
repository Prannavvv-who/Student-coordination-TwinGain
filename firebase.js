import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWJaT11HQNG6IDUDVKlwgmedS0orT7bcc",
    authDomain: "studentcoordinationapp.firebaseapp.com",
    projectId: "studentcoordinationapp",
    storageBucket: "studentcoordinationapp.firebasestorage.app",
    messagingSenderId: "273354452605",
    appId: "1:273354452605:web:379f255a3e12689b670b14",
    measurementId: "G-MDBB57TW1C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

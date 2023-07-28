// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "vingig-fpt.firebaseapp.com",
    projectId: "vingig-fpt",
    storageBucket: "vingig-fpt.appspot.com",
    messagingSenderId: "273850103399",
    appId: "1:273850103399:web:79c3324c8cffc78cd286c2",
    measurementId: "G-7Y5NR5HBB2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
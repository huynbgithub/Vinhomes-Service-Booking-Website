// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7-EPzmPQ4xjeV2jeaQx0v0WmIRywiy9E",
    authDomain: "vingig-fpt.firebaseapp.com",
    projectId: "vingig-fpt",
    storageBucket: "vingig-fpt.appspot.com",
    messagingSenderId: "273850103399",
    appId: "1:273850103399:web:79c3324c8cffc78cd286c2",
    measurementId: "G-7Y5NR5HBB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
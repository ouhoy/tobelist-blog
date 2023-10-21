// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBw96UZMfoG1f97Em9sCT9ox99O23gdsng",
    authDomain: "tobelistnet.firebaseapp.com",
    projectId: "tobelistnet",
    storageBucket: "tobelistnet.appspot.com",
    messagingSenderId: "414671556167",
    appId: "1:414671556167:web:bfcb671a0e004f2a306b62",
    measurementId: "G-Z3FKHHGSV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
const auth = getAuth()

export {db, auth}
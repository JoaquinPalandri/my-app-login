// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyADeeNUXJpRnN2LVzOplRfw1cSvBCKaFhk",

  authDomain: "milogin-72317.firebaseapp.com",

  projectId: "milogin-72317",

  storageBucket: "milogin-72317.firebasestorage.app",

  messagingSenderId: "462339373511",

  appId: "1:462339373511:web:dccb7176027143ac1881e2"

};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
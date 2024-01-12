// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdLr6E2FwcufHLeHvEBI7mx4rTFjDjeKw",
  authDomain: "netflix-gpt-ca7fc.firebaseapp.com",
  projectId: "netflix-gpt-ca7fc",
  storageBucket: "netflix-gpt-ca7fc.appspot.com",
  messagingSenderId: "1658036586",
  appId: "1:1658036586:web:f6fbc16b77392115d98513",
  measurementId: "G-5XBEGPFBXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

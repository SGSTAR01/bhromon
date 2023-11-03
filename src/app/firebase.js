// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFe9cFyzbYoJBv7S3hWX1oofddXLfItBQ",
  authDomain: "bhromon-c95eb.firebaseapp.com",
  projectId: "bhromon-c95eb",
  storageBucket: "bhromon-c95eb.appspot.com",
  messagingSenderId: "994868371666",
  appId: "1:994868371666:web:58ea056a5cbaea4c774d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
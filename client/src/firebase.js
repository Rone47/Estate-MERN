// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-77a4b.firebaseapp.com",
  projectId: "mern-estate-77a4b",
  storageBucket: "mern-estate-77a4b.appspot.com",
  messagingSenderId: "227213871747",
  appId: "1:227213871747:web:cddc2cc5261046382169b6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
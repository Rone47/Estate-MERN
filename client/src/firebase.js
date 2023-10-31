// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-a0ee1.firebaseapp.com",
  projectId: "real-estate-mern-a0ee1",
  storageBucket: "real-estate-mern-a0ee1.appspot.com",
  messagingSenderId: "1055635141791",
  appId: "1:1055635141791:web:5e6257132553e0d34fdeaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
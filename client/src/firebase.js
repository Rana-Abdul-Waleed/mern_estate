// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f5ade.firebaseapp.com",
  projectId: "mern-estate-f5ade",
  storageBucket: "mern-estate-f5ade.appspot.com",
  messagingSenderId: "1021464199469",
  appId: "1:1021464199469:web:c6cfedf97680ceaf1e13a4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

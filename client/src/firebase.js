// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-85967.firebaseapp.com",
  projectId: "mern-blog-85967",
  storageBucket: "mern-blog-85967.appspot.com",
  messagingSenderId: "477278337926",
  appId: "1:477278337926:web:f5c2e8c279974a3687ca07",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

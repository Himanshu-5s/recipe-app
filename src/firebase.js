// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvc-KdUCJCnaaFHQafoMM1fEWY0Zx_KqI",
  authDomain: "recipe-app-7f61e.firebaseapp.com",
  projectId: "recipe-app-7f61e",
  storageBucket: "recipe-app-7f61e.appspot.com",
  messagingSenderId: "1005335897114",
  appId: "1:1005335897114:web:1c5d7d2096931f4f62dda3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);



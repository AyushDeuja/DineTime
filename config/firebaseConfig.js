// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp__JLmx9k2oWlI6KPBbABKrm5dwgku8A",
  authDomain: "dinetime-ea2bf.firebaseapp.com",
  projectId: "dinetime-ea2bf",
  storageBucket: "dinetime-ea2bf.firebasestorage.app",
  messagingSenderId: "835462791168",
  appId: "1:835462791168:web:4d72cf4e08bb7c5da2d8e5",
  measurementId: "G-ZX9WHGNWY2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbeeTRCq-7BR6QAFg7PofhUrulbnnqr2U",
  authDomain: "sly-36c18.firebaseapp.com",
  projectId: "sly-36c18",
  storageBucket: "sly-36c18.firebasestorage.app",
  messagingSenderId: "384563685980",
  appId: "1:384563685980:web:2ab7decebd50a500f1d499",
  measurementId: "G-VK263DCLCE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig

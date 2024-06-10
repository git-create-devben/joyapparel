// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe32bgQuw0LrOdO_SpHYVanMAqVkHKKyo",
  authDomain: "joyapparel-2208f.firebaseapp.com",
  projectId: "joyapparel-2208f",
  storageBucket: "joyapparel-2208f.appspot.com",
  messagingSenderId: "565856364615",
  appId: "1:565856364615:web:cc1ce40901ae1f77342962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
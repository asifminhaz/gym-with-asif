// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm92KruVN47HycD-npX3OHH_JPHQLyIYM",
  authDomain: "gym-freak-176ed.firebaseapp.com",
  projectId: "gym-freak-176ed",
  storageBucket: "gym-freak-176ed.appspot.com",
  messagingSenderId: "525048701879",
  appId: "1:525048701879:web:58faf8e83a8f28b6ab3e32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
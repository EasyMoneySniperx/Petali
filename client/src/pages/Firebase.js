// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe3VxJ1PL5YwG8Svo9aJNty7I3iau5rZM",
  authDomain: "petali-f3905.firebaseapp.com",
  projectId: "petali-f3905",
  storageBucket: "petali-f3905.appspot.com",
  messagingSenderId: "365843839512",
  appId: "1:365843839512:web:430b95323178ee0bb2616d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

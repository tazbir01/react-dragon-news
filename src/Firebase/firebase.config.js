// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbF1lxsPENg44K1NtdkHiMuxKibeqTOyw",
  authDomain: "react-dragon-news-25f14.firebaseapp.com",
  projectId: "react-dragon-news-25f14",
  storageBucket: "react-dragon-news-25f14.appspot.com",
  messagingSenderId: "450190260242",
  appId: "1:450190260242:web:8e01aaa68d28de674f00cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
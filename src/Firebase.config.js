// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtUgdiMWLVYi6bC-ku05b73q4-O_6l0cE",
  authDomain: "furniture-mart-5ca93.firebaseapp.com",
  projectId: "furniture-mart-5ca93",
  storageBucket: "furniture-mart-5ca93.appspot.com",
  messagingSenderId: "622105629296",
  appId: "1:622105629296:web:3c3114ec8e74c92dcfdab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
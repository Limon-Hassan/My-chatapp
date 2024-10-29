// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFKRT0-4h9tZhtC5aMlDLhi4wtbygb44M",
  authDomain: "my-chat-app-40e3b.firebaseapp.com",
  projectId: "my-chat-app-40e3b",
  storageBucket: "my-chat-app-40e3b.appspot.com",
  messagingSenderId: "13551714633",
  appId: "1:13551714633:web:cc26e284b8653784945a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig
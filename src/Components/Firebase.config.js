// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyJWSKVhNtPMhlaHYaUTWcTspOe3S1TYY",
  authDomain: "etuitionbd-927c4.firebaseapp.com",
  projectId: "etuitionbd-927c4",
  storageBucket: "etuitionbd-927c4.firebasestorage.app",
  messagingSenderId: "857227420838",
  appId: "1:857227420838:web:2c6de676d1e93cb9524067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
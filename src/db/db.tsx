// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNF8SzvlM_Uyyp7oNjXlMufTghRUCj7e4",
  authDomain: "anleneproject1.firebaseapp.com",
  projectId: "anleneproject1",
  storageBucket: "anleneproject1.appspot.com",
  messagingSenderId: "36343002641",
  appId: "1:36343002641:web:c859481f4e9ed5fdbc23b0",
  measurementId: "G-Z4JN258V67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db,app};
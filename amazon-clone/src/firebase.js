//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCYE5Wsg_qkLFzC1XSbTTyiyGtWwGuWRt4",
  authDomain: "project-v1-733ba.firebaseapp.com",
  projectId: "project-v1-733ba",
  storageBucket: "project-v1-733ba.appspot.com",
  messagingSenderId: "583006280142",
  appId: "1:583006280142:web:10cee7cee547b9e812b39f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };
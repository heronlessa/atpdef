
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2vUyqfcAyncqYl5sHt9eqXG8WXRXnvBE",
  authDomain: "login-auth-f69d8.firebaseapp.com",
  projectId: "login-auth-f69d8",
  storageBucket: "login-auth-f69d8.appspot.com",
  messagingSenderId: "661710487176",
  appId: "1:661710487176:web:17ae538866cc5bd24e293d"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
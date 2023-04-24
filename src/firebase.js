// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDu0-Qm1vqYtRhDbLBhcl8XL3-XH1Llcdg",
  authDomain: "chattie-97115.firebaseapp.com",
  projectId: "chattie-97115",
  storageBucket: "chattie-97115.appspot.com",
  messagingSenderId: "172700485908",
  appId: "1:172700485908:web:1424648c6a983b07471a01"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

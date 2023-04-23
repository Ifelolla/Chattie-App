// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBQ0Y8IhgDJNUtQDiutEJpg1j3AP2ZfFAQ",
  authDomain: "chattie-6962c.firebaseapp.com",
  projectId: "chattie-6962c",
  storageBucket: "chattie-6962c.appspot.com",
  messagingSenderId: "480565068494",
  appId: "1:480565068494:web:ea4e75fc254c399e93069f",
  measurementId: "G-0CPV2S30KV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

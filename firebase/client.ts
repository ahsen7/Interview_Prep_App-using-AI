import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAVz4KZYwPPGK8B1_ED5hv5ibp1VXxi5vM",
  authDomain: "mockview-3e4d9.firebaseapp.com",
  projectId: "mockview-3e4d9",
  storageBucket: "mockview-3e4d9.firebasestorage.app",
  messagingSenderId: "139114063252",
  appId: "1:139114063252:web:f0ea14b883229413a2db81",
  measurementId: "G-Y1TK6X6KE2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
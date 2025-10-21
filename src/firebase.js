// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// ✅ Your Firebase configuration (from .env)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Realtime Database
export const db = getDatabase(app);

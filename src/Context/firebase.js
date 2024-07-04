
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTgvVYFP3P34-_zaQwoU9EspKjplvotn8",
  authDomain: "whispering-pages.firebaseapp.com",
  projectId: "whispering-pages",
  storageBucket: "whispering-pages.appspot.com",
  messagingSenderId: "685765687457",
  appId: "1:685765687457:web:bbaa61b4fc47e8e55598e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
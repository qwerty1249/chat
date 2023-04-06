import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbjE916u1ejfn525R4yNMHhoIgWeO3pmI",
  authDomain: "chat-app-1d512.firebaseapp.com",
  projectId: "chat-app-1d512",
  storageBucket: "chat-app-1d512.appspot.com",
  messagingSenderId: "682887570566",
  appId: "1:682887570566:web:a2c140cd594a13edb05d07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

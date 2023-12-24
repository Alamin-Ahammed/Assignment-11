import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhGY39ygNUghlix2urx4e82AJD0WbeUfg",
  authDomain: "assignment-11-ahammed.firebaseapp.com",
  projectId: "assignment-11-ahammed",
  storageBucket: "assignment-11-ahammed.appspot.com",
  messagingSenderId: "915240462708",
  appId: "1:915240462708:web:719bd860e7971cc9996421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
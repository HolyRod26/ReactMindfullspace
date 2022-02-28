import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMjsmLhc67QdCKNDvDpO1RHlTjmZwhB4A",
  authDomain: "mindfullspace-22.firebaseapp.com",
  projectId: "mindfullspace-22",
  storageBucket: "mindfullspace-22.appspot.com",
  messagingSenderId: "560746506022",
  appId: "1:560746506022:web:526eb92f95a17af3eec3e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

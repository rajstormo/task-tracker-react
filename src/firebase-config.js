
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD86yUTIXREYUdN3upC4B0vGxosExX5huA",
  authDomain: "todo-app-7d2d4.firebaseapp.com",
  projectId: "todo-app-7d2d4",
  storageBucket: "todo-app-7d2d4.appspot.com",
  messagingSenderId: "628862706262",
  appId: "1:628862706262:web:53d7e9bc2956d0126cd1f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
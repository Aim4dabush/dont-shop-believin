import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA-759kH8I82n8oqmCPWSHlS_OwtE-pKc",
  authDomain: "e-commerce-30411.firebaseapp.com",
  projectId: "e-commerce-30411",
  storageBucket: "e-commerce-30411.appspot.com",
  messagingSenderId: "413379540836",
  appId: "1:413379540836:web:ec0ff0cc35a1ed7ae86c71",
};

const app = initializeApp(firebaseConfig);

//authentication
export const auth = getAuth(app);

//database
export const db = getFirestore(app);

// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWQyZTieepHlDFZsbmkTjducEeqadmx-4",
  authDomain: "natascha-und-jan-heiraten.firebaseapp.com",
  projectId: "natascha-und-jan-heiraten",
  storageBucket: "natascha-und-jan-heiraten.firebasestorage.app",
  messagingSenderId: "470655239329",
  appId: "1:470655239329:web:baf7fddd014c3199f3dce0",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };

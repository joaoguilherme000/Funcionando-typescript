import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAHU5ZRqkufdSLf1tpZkFFRTNa4ajxlnHg",
  authDomain: "banco-camera.firebaseapp.com",
  projectId: "banco-camera",
  storageBucket: "banco-camera.appspot.com",
  messagingSenderId: "343361982535",
  appId: "1:343361982535:web:e32ded712ef201576f6162",
  measurementId: "G-PWPL28HT61"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
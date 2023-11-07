import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDCrvv2O2nsUhJhiSd8eoTOlzjtvVmWQm0",
    authDomain: "g41h123-29109.firebaseapp.com",
    databaseURL: "https://g41h123-29109-default-rtdb.firebaseio.com",
    projectId: "g41h123-29109",
    storageBucket: "g41h123-29109.appspot.com",
    messagingSenderId: "905244658751",
    appId: "1:905244658751:web:51ff3cb96b4a32d7bf7c8a",
    measurementId: "G-JSLY3Y4HRQ"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, storage };
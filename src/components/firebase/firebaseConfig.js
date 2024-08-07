import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXzT-7tJ636J_Y_ERP6cqfL6cUBkW_8mI",
  authDomain: "nesaseskul.firebaseapp.com",
  projectId: "nesaseskul",
  storageBucket: "nesaseskul.appspot.com",
  messagingSenderId: "288947967677",
  appId: "1:288947967677:web:bd5445af16bd61c53309d4",
  measurementId: "G-1LBZJKWWB3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
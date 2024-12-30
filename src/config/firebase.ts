import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBfatUr_JShsnda0WlnrGslqLQNSMlZt5M",
  authDomain: "health-care-94411.firebaseapp.com",
  databaseURL: "https://health-care-94411-default-rtdb.firebaseio.com",
  projectId: "health-care-94411",
  storageBucket: "health-care-94411.firebasestorage.app",
  messagingSenderId: "317564313847",
  appId: "1:317564313847:web:93b696adb5a58f367a33f2",
  measurementId: "G-H0M7LVSVPN"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
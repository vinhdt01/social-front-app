// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDcN0HYJP15MJ8OqNRVO-n3mJ7p7s1qelA",
  authDomain: "auth-social-99539.firebaseapp.com",
  projectId: "auth-social-99539",
  storageBucket: "auth-social-99539.appspot.com",
  messagingSenderId: "807861057486",
  appId: "1:807861057486:web:fd7d3948249c3129265d9f",
};

// Check if a Firebase app is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
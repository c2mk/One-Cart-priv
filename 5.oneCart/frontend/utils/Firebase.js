import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "one-cart-d1f8d.firebaseapp.com",
  projectId: "one-cart-d1f8d",
  storageBucket: "one-cart-d1f8d.firebasestorage.app",
  messagingSenderId: "609772718653",
  appId: "1:609772718653:web:bb46769125a5b41cb7f854",
  measurementId: "G-JQ86T3RRB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { auth, provider };

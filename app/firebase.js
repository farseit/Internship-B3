/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ecommerce-8215f.firebaseapp.com",
  projectId: "ecommerce-8215f",
  storageBucket: "ecommerce-8215f.appspot.com",
  messagingSenderId: "499081831674",
  appId: "1:499081831674:web:49ce7520643212b6ed1543",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-05As1SWjjpGK5ZxB_JWagx4DZzhKmVc",
  authDomain: "gadget360-16689.firebaseapp.com",
  projectId: "gadget360-16689",
  storageBucket: "gadget360-16689.firebasestorage.app",
  messagingSenderId: "1050614434442",
  appId: "1:1050614434442:web:1ffb98672bb0f53a1c7b73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);

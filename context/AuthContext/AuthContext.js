"use client";
import { app, auth } from "@/app/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  // SingnUp with Google
  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const userInfo = {
    googleSignUp,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;

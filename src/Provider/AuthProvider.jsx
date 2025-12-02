import React from "react";
import { AuthContext } from "./AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebse.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    googleSignIn,
  };
  return (
    <>
      <div>
        <AuthContext value={authInfo}>{children}</AuthContext>
      </div>
    </>
  );
};

export default AuthProvider;

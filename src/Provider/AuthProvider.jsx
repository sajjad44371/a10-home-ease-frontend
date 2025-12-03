import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebse.config";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // set observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // auth info
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    googleSignIn,
    logOut,
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

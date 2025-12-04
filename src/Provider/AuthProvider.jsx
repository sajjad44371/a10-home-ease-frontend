import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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

  // email & pass sign in
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update profile
  const updateProfileInfo = (name, photoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
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
    createUser,
    updateProfileInfo,
    loginUser,
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

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import useAxiosPublic from "../../customsHooks/useAxiosInPublic/useAxiosPublic";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // used google / social login option
  const googleProvider = new GoogleAuthProvider();
  // useAxiosPublic for jwt
  const axiosPublic = useAxiosPublic();

  // Create User : import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign in a user with an email address and password: import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign in option
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign out a user : import { getAuth, signOut } from "firebase/auth";
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // update user profile :import { getAuth, updateProfile } from "firebase/auth";
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Get the currently signed-in user: import { getAuth, onAuthStateChanged } from "firebase/auth";
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user:", currentUser);
      if (currentUser) {
        // get token using jtw and store client site
        const userInfo = {
          email: currentUser.email,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        // to do something : REMOVE TOKEN
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe;
    };
  }, [axiosPublic]);
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
    updateUserProfile,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

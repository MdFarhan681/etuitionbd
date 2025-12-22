import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import toast from "react-hot-toast";
import app from "../Firebase.config";
export const AuthContext = createContext();
export const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loading, setloading] = useState(true);
  const [lastEmail, setLastEmail] = useState("");

  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setuser(user);
        return user;
      })
      .catch(() => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setuser(currentUser);

      if (!currentUser?.uid) {
        setDbUser(null);
        setloading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://etuition-server-psi.vercel.app/users/${currentUser.uid}`
        );
        // , {
        //            headers: {
        //              authorization: `Bearer ${user.accessToken}`,
        //            },
        //          }
        if (res.ok) {
          const data = await res.json();
          setDbUser(data);
        } else {
          setDbUser(null);
        }
      } catch (error) {
        // console.error("DB user fetch failed:", error);
        setDbUser(null);
      } finally {
        setloading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setuser,
    createuser,
    loading,
    setloading,
    logOut,
    signIn,
    googleSignIn,
    dbUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

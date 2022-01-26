import {
  getAuth,
  //   createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import firebaseAuthencation from "../Pages/Shared/Login/firebase/firebase.init";

firebaseAuthencation();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggingUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUsers(loggingUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
    });
    return unsubcribed;
  }, []);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    signInWithGoogle,
    users,
    logout,
    isLoading,
    authError,
  };
};
export default useFirebase;

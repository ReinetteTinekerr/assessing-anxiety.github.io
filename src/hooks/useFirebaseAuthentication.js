import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseInit";

const useFirebaseAuthentication = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unlisten = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });
    return () => {
      unlisten();
    };
  }, []);

  return authUser;
};

export default useFirebaseAuthentication;

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseInit";

export const signIn = async ({ email, password }) => {
  console.log(email, password);
  try {
    const credential = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );
    const user = credential.user;
    return { error: false, message: "success" };
  } catch (error) {
    return { error: true, message: error };
  }
};

export const logout = () => {
  signOut(auth);
};

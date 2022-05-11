import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "<>",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signOutWithGoogle = async () => {
  await signOut(auth)
    .then(() => {
      console.log("Successful signOutWithGoogle");
    })
    .catch((err) => {
      console.log("Error signOutWithGoogle", err);
    })
    .finally(() => {
      console.log("Finally signOutWithGoogle");
      localStorage.setItem("user", "");
      localStorage.setItem("name", null);
      localStorage.setItem("email", null);
      localStorage.setItem("photo", null);
      console.log(localStorage.getItem("user") === "");
      console.log(localStorage.getItem("user"));
    });
};

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(result);
      console.log(user);
      console.log(user.displayName);
      console.log(user.photoURL);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("email", user.email);
      localStorage.setItem("photo", user.photoURL);
    })
    .catch((error) => {
      console.log(error);
    });
};

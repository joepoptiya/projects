import "./App.css";
import { useState, useEffect } from "react";
import { auth } from "./config/firebase-config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import ListOfTodo from "./components/ListOfTodo";

const provider = new GoogleAuthProvider();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    false || window.localStorage.getItem("isAuthenticated") === "true"
  );
  const [token, setToken] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((credential) => {
      if (credential) {
        setIsAuthenticated(true);
        window.localStorage.setItem("isAuthenticated", "true");
        credential.getIdToken().then((token) => {
          window.localStorage.setItem("token", token);
          setToken(token);
        });
      } else {
        setIsAuthenticated(false);
        setToken("");
      }
    });
  }, []);

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((credential) => {
      if (credential) {
        setIsAuthenticated(true);
        window.localStorage.setItem("isAuthenticated", "true");
        provider.addScope("https://www.googleapis.com/auth/userinfo.birthday");
      }
    });
  };

  const logoutWithGoogle = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
    setToken("");
    window.localStorage.setItem("isAuthenticated", "false");
    window.localStorage.setItem("token", "");
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <ListOfTodo token={token} />
          <button onClick={logoutWithGoogle}> Logout with Google</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
}

export default App;

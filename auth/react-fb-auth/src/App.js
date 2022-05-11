import "./App.css";
import { signInWithGoogle, signOutWithGoogle } from "./firebase";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("user") === "" ? (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      ) : (
        <>
          <button onClick={signOutWithGoogle}>Sign Out with Google</button>
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("photo")} alt="profile" />
        </>
      )}
    </div>
  );
}

export default App;

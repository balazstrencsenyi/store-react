import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from './AuthDetails';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
      console.log(useCredential)
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <div className="signInContainer">
      <form onSubmit={signUp}>
        <h1>create an account</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">sign up</button>
      </form>
      <AuthDetails />
    </div>
  );
};

export default SignUp;

import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from './AuthDetails';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

   const escapeAuth = () => {
    document.querySelector('.signInContainer').style.display = 'none';
  }

  return (
    <div className="signInContainer">
      <Button variant="outlined" className="escapeAuth" onClick={escapeAuth}>X</Button>
      <form onSubmit={signUp}>
        <h1>Create an account</h1>
        <TextField
          className="authTextField"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="Email"
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="authTextField"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" type="submit">Sign Up</Button>
      </form>
      <AuthDetails />
    </div>
  );
};

export default SignUp;

import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Button from '@mui/material/Button';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="status">
      {authUser ? (
        <>
          {" "}
          <p>{`Signed In as ${authUser.email}`}</p>{" "}
          <Button variant="outlined" onClick={userSignOut}>Sign Out</Button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;

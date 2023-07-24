import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Signin from "./Signin";

import { auth, provider } from "../../firebase.js";
import Home from "../Home";

const Welcome = () => {
  const [user, setUser] = useState(null);


  async function handleClick() {
    const token = await signInWithPopup(auth, provider)
      .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log(token, 'user')
        return token

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        console.log(errorMessage, 'err')

        const credential = GoogleAuthProvider.credentialFromError(error);

      });
    setUser(token)
    localStorage.setItem('user', JSON.stringify(token))
  }

  useEffect(() => {
    if (localStorage.getItem('user') || '')
      setUser(localStorage.getItem('user'))
  }, [])
  return (
    <div>
      {user ? <Home /> : <Signin handleClick={handleClick} />}
    </div>
  )
}

export default Welcome

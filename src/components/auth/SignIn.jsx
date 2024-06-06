import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState }  from 'react';
import { auth } from "../../firebase";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
    });
  };


  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Log In to Your Account</h1>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        
        ></input>
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        ></input>
        <button type= "submit">Log In</button>
      </form>
    </div>
  )
}

export default SignIn;
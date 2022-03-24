import React from "react";
import { useState} from 'react'
// import "../../styles/login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,

} from "firebase/auth";
import {auth } from '../../../src/firebase-config'


const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
 
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      style={{
        // width: "500px",

        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <form class='form-signin'>
        {/* <img
        class='mb-4'
        src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'
        alt=''
        width='72'
        height='72'
      /> */}
        <h1 class='h3 mb-3 font-weight-normal'>Company Logo</h1>
        <h1 class='h3 mb-3 font-weight-normal'>Please log in</h1>
        <label for='inputEmail' class='sr-only'>
          Email address
        </label>
        <input
          style={{ padding: "10px", width: "500px", fontSize: "15px" }}
          type='email'
          id='inputEmail'
          class='form-control'
          placeholder='Email address'
          required
          autofocus
          //  placeholder="Email..."
           onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        
        />
        <br />
        <label for='inputPassword' class='sr-only'>
          Password
        </label>
        <input
          style={{ padding: "10px", width: "500px", fontSize: "15px" }}
          type='password'
          id='inputPassword'
          class='form-control'
          placeholder='Password'
          required
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <br />
        <div class='checkbox mb-3'>
          <label className='px-4'>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
          <a href='/' className='px-4'>
            Forgot password?
          </a>
        </div>
        <button
          class='btn btn-lg btn-primary btn-block'
          type='submit'
          style={{ padding: "10px", width: "500px", fontSize: "15px" }}
          
          onClick={login}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;

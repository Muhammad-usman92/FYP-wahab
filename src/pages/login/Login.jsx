import React from "react";
// import "../../styles/login.css";
const Login = () => {
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
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import '../styles/Login.css';
import SignUp from './SignUp';

function Login() {
  return (
    <div className='login'> 
        <div className="login__gradient"/>
          <SignUp />
    </div>

  );
}

export default Login;

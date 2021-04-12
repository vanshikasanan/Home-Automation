import React, { useRef } from 'react';
import { auth, provider } from '../utils/firebase';
import '../styles/SignUp.css';
import { Button } from '@material-ui/core';


function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = () => {
        auth.signInWithPopup(provider).catch(alert);
      };
  
      const register = (e) => {
          e.preventDefault();
  
          auth
          .createUserWithEmailAndPassword(
              emailRef.current.value,
              passwordRef.current.value
          )
          .then((authUser) => {
              console.log(authUser)
  
         })
         .catch(error => {
             alert(error.message);
         });
      };
  
      const signIn = (e) => {
          e.preventDefault();
          auth
          .signInWithEmailAndPassword(
              emailRef.current.value,
              passwordRef.current.value
          )
          .then((authUser) => {
              console.log(authUser);
          })
          .catch((error) => 
              alert(error.message));
         
      };
  
   

    return (
        <div className="signup">
            <form>
               <h1>Sign In  </h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <div> </div>
                <Button  onClick={signIn}> 
                    Sign In
                </Button>
                <h4>
                    <span className="signup__user">
                        New User? </span> 

                    <span className="signup__link" onClick={register}>
                         Sign Up now.</span>
                     
                </h4>
                 <Button  variant='contained' color='secondary'onClick={signUp}>
                    
                    Sign In with Google
                </Button>
            </form>
        </div>
    )
}

export default SignUp

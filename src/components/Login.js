import { auth, provider } from '../utils/firebase';
import '../styles/Login.css';
import { Button } from '@material-ui/core';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <div className='login'>
      <div className='login__title'>
        <title>Login</title>
      </div>
      <div className='login__container'>
        <img
          src='https://www.graphicsprings.com/filestorage/stencils/d5cb0806c8f416503f20b9eb6124baed.png?width=500&height=500'
          alt='Home'
        />
        <Button variant='outlined' onClick={signIn}>
          {' '}
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;

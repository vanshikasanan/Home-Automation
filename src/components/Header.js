import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from '../firebase';


const useStyles = makeStyles((theme) => ({
  title: {
    //position: 'fixed',
    //fontWeight: 800,
  },
  name: {
    //position: 'fixed',
    color: 'white',
    marginRight: '1.8rem',
    fontSize: 15,
    paddingTop: 5,
  },
  logout: {
    //position: 'fixed',
    right: '20px',
    width: 'auto',
    fontSize: 10,
  },
}));

function Header() {
  const classes = useStyles();
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <>
      <div className={`header ${show && 'header__black'}`}>
        <div className='header__contents'>
          <div className='header__contentLeft'>
            <Typography variant='h5' color='primary' className={classes.title}>
              Home Automation
            </Typography>
          </div>
          <div className='header__contentRight'>
            <Typography variant='h6' color='secondary' className={classes.name}>
              Hey Name
            </Typography>
            <Button
              onClick= {() => auth.signOut()}
              startIcon={<ExitToAppIcon />}
              className={classes.logout}
              color='primary'
              variant='contained'
              disableElevation>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

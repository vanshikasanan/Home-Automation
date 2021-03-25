import React from 'react';
import '../styles/Banner.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Jumbotron } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  jumbo: {
    height: '50vh',
    background: 'black no-repeat center',
    backgroundSize: 'cover',
  },
  jumbohead: {
    paddingTop: '12%',
    color: 'white',
  },
}));
function Banner() {
  const classes = useStyles();

  return (
    <div className='banner'>
      <Jumbotron fluid className={classes.jumbo}>
        <Container>
          <Typography variant='h2' className={classes.jumbohead}>
            Welcome Back!
          </Typography>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Banner;

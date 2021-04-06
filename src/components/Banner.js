import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { Jumbotron } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  jumbo: {
    background: 'black no-repeat center',
    backgroundSize: 'cover',
    height: '100%',
  },
  jumbohead: {
    marginTop: 70,
    color: 'white',
  },
}));
function Banner() {
  const classes = useStyles();

  return (
    <Grid style={{ height: '40vh' }}>
      <Jumbotron fluid className={classes.jumbo}>
        <Container>
          <Typography variant='h2' className={classes.jumbohead}>
            Welcome Back!
          </Typography>
        </Container>
      </Jumbotron>
    </Grid>
  );
}

export default Banner;

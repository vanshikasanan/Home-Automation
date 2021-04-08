import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import LightBulb from './Devices/LightBulb';

const useStyles = makeStyles((theme) => ({
  align: {
    justifyContent: 'center',
    display: 'flex',
  },
}));

function ControlPanel() {
  const classes = useStyles();
  return (
    <Grid style={{ marginLeft: '30px', padding: '25px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4'>
            <Box fontWeight={500} m={1}>
              Control Panel
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.align}>
          <LightBulb />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ControlPanel;

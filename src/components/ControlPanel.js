import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import LightBulb from './Devices/LightBulb';

function ControlPanel() {
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
        <Grid item xs={12} md={6}>
          <LightBulb />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ControlPanel;

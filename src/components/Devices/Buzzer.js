import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import thingSpeakAPI from '../../utils/axios';
import { ThingSpeakReadAPI } from '../../utils/utils';

function Buzzer() {
  const [buzzer, setBuzzer] = useState(false);

  useEffect(() => {
    const buzz = async () => {
      try {
        const res = await thingSpeakAPI({
          method: 'get',
          url: ThingSpeakReadAPI(7),
        });
        console.log(res.data, 'Buzzer');
        setBuzzer(res?.data === 1 ? true : false);
      } catch (err) {
        console.log(err);
      }
    };
    const interval = setInterval(async () => {
      buzz();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {buzzer ? (
        <Grid item xs={12}>
          <Grid className={`${buzzer && 'circle-ripple'}`}></Grid>
          <Typography variant='h6'>INTRUDER DETECTED! CALL 911! ASAP!</Typography>
        </Grid>
      ) : null}
    </>
  );
}

export default Buzzer;

import { FormControlLabel, Switch } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ThingSpeakReadAPI } from '../../utils/utils';

function LightBulb() {
  const [state, setState] = useState(false);

  useEffect(() => {
    axios.get(ThingSpeakReadAPI(3)).then((res) => {
      console.log(res.data, 'lightbulb');
      setState(res?.data === 1 ? true : false);
    });
  }, []);

  return (
    <FormControlLabel
      control={<Switch checked={state} onChange={'handleChange'} name='lightbulb' id='3' />}
      label='Secondary'
    />
  );
}

export default LightBulb;

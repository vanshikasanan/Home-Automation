import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import "../../styles/Gassensor.css"
import thingSpeakAPI from "../../utils/axios";
import { ThingSpeakReadAPI } from "../../utils/utils";

function Gassensor() {
    
    const [state, setState] = useState(0);

    useEffect(() => {
      const  Gas = async () => {
      try {
        const res = await thingSpeakAPI({
          method: 'get',
          url: ThingSpeakReadAPI(8),
        });
        console.log(res.data, 'Gas Sensor');
        setState(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    const interval = setInterval(async () => {
      Gas();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    return (
    
    <Typography variant='body1' style={{ marginTop: 5 }}>
      Gas Sensor Value:{' '}
      <Box fontSize={25} fontWeight={900} m={1}>
        {state}
      </Box>
    </Typography>          
        
    )
}

export default Gassensor

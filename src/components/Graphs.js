import React from 'react';
import "../styles/Graphs.css";
import { GraphsRead } from '../utils/utils';
import Graphitem from './Graphitem';



function Graphs() {
    return (
        <div className="graph">
            <h1>Graphs</h1>
            <div className="graph__container1">
                <div className="graph__section"> 
                   <Graphitem  title="Temperature" link={GraphsRead(1)}/>
                </div>
                <div className="graph__section"> 
                   <Graphitem title= "Ultrasonic" link={GraphsRead(2)}/>
                </div>
             
                <div className="graph__section"> 
                   <Graphitem title= "Light-Button" link={GraphsRead(3)}/>
                </div>
            </div>

            <div className="graph__container2">
                <div className="graph__section"> 
                   <Graphitem  title="Photo-Resistor" link={GraphsRead(4)}/>
                </div>
                <div className="graph__section"> 
                   <Graphitem title= "Pir-Sensor" link={GraphsRead(5)}/>
                </div>
             
                <div className="graph__section"> 
                   <Graphitem title= "Intruder-Button" link={GraphsRead(6)}/>
                </div>
            </div>

             <div className="graph__container3">
                <div className="graph__section"> 
                   <Graphitem  title="Buzzer" link={GraphsRead(7)}/>
                </div>
                <div className="graph__section"> 
                   <Graphitem title= "Gas-Sensor" link={GraphsRead(8)}/>
                </div>
             
               
            </div>
           
            
        </div>
    )
}

export default Graphs 

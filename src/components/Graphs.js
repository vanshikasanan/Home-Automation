import React from 'react';
import "../styles/Graphs.css";
import Graphitem from './Graphitem';



function Graphs() {
    return (
        <div className="graph">
            <h1>Graphs</h1>
            <div className="graph__container1">
                <div className="graph__section"> 
                   <Graphitem  title="Temperature" link="https://thingspeak.com/channels/1336379/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"/>
                </div>
                <div className="graph__section"> 
                   <Graphitem title= "Ultrasonic" link="https://thingspeak.com/channels/1336379/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"/>
                </div>
             
                <div className="graph__section"> 
                   <Graphitem title= "Light-Button" link=" https://thingspeak.com/channels/1336379/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"/>
                </div>
            </div>

            <div className="graph__container2">
                <div className="graph__section"> 
                   <Graphitem  title="Photo-Resistor" link="https://thingspeak.com/channels/1336379/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"/>
                </div>
                <div className="graph__section"> 
                   <Graphitem title= "Pir-Sensor" link="https://thingspeak.com/channels/1336379/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"/>
                </div>
             
                <div className="graph__section"> 
                   <Graphitem title= "Intruder-Button" link=" https://thingspeak.com/channels/1336379/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"/>
                </div>
            </div>

             <div className="graph__container3">
                <div className="graph__section"> 
                   <Graphitem  title="Buzzer" link="https://thingspeak.com/channels/1336379/charts/7?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"/>
                </div>
                <div className="graph__section"> 
                   <Graphitem title= "Gas-Sensor" link="https://thingspeak.com/channels/1336379/charts/8?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"/>
                </div>
             
               
            </div>
           
            
            <div>
            hello
            </div>
        </div>
    )
}

export default Graphs 

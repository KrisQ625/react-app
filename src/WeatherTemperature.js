import React, {useState} from "react";
import "./Weather.css";


export default function WeatherTemperature(props){
const [unit, setUnit] = useState ("celsius");
function convertToFahernheit(event){
  event.preventDefault();
  setUnit("fahrenheit");
}

function convertToCelsius(event){
  event.preventDefault();
  setUnit("celsius");
}
if (unit === "celsius")  
{
  return (
  <div>
  <h2 className="temperature"> {Math.round(props.celsius)}<small className="unit d-inline-flex">°C / <a href="/" on onClick={convertToFahernheit}>°F</a></small></h2>
     </div>

 );}
 else{
  let fahrenheit = (props.celsius*9) /5+ 32;
  return (<div>
  <h2> {Math.round(fahrenheit)}<small className="unit d-inline-flex"><a href="/" on onClick={convertToCelsius}>°C</a> / °F</small></h2>
     </div>);
 }

}
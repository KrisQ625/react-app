import React from "react";

export default function WeatherForecastDay(props){
  function maxTemperature(){
    let temperatureMax= Math.round(props.data.temperature.maximum);
    return `${temperatureMax}°`
  }
   function minTemperature(){
    let temperatureMin= Math.round(props.data.temperature.minimum);
    return `${temperatureMin}°`
  }

  function day(){
    let date= new Date (props.data.time*1000);
    let day= date.getDay();
    let days= ["Sun", "Mon", "Tue", "Wed","Thu","Fri","Sat"];

    return days[day];

  }
return(
<div>
 <div className="forecast-day"> {day()}</div>
      <img alt ={props.data.condition.description} src={props.data.condition.icon_url} width ="5"/> 

          

    <div className="forecast-temp" >
      <span className="Forecast-max">{maxTemperature()}</span> 
     <span className="Forecast-min">{minTemperature()}</span> 
     
    </div>
    </div> );

}
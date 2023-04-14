import React from "react";
import "./WeatherForecast.css";



export default function WeatherForecast(props){
  return (
   <div className="WeatherForecast">
    <div className="col">
     <div className="forecast-day"> thu</div>
         <div className="Forecast-img">IMG</div>     

    <div className="forecast-temp" >
       <span className="Forecast-max">19°</span> /
     <span className="Forecast-min">10°</span> 
    </div> 
    </div>
   </div>

  )
}
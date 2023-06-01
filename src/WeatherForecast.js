import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
let [loaded,setLoaded]= useState(false);
let [forecast, setForecast]= useState(null);

useEffect(()=>{setLoaded(false);},
[props.city]);



function handleResponse(response){
  console.log(response.data);
  setForecast(response.data.daily); 
  setLoaded(true);
}

function load(){
  let city= props.city;
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=ac9185d0f8b9a1boc9ba4b9t42303979&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}


if(loaded){
console.log(forecast);
   return ( 
   <div className="WeatherForecast">
<div className="row">
  {forecast.map(function (dailyForecast, index) {
    if (index < 6 && index > 0) {
      return (
        <div className="col" key={index}>
          <WeatherForecastDay data={dailyForecast} />
        </div>
      );
    }
    return null;
  })}
</div>
</div>
  );
  


 } else{
  load();

return null;


  }
}
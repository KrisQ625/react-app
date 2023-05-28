import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props){
let [loaded,setLoaded]= useState(false);
let [forecast, setForecast]= useState(null);

function handleResponse(response){
  console.log(response.data);
  setForecast(response.data); 
  setLoaded(true);
}

if(loaded){
console.log(forecast);
   return ( 
   <div className="WeatherForecast">
    <div className="col">
     <div className="forecast-day"> Thu</div>
      <img alt ={props.data.description} src={props.data.icon_url} width ="5"/> 

          

    <div className="forecast-temp" >
      <span className="Forecast-max">{forecast.daily[0].temperature.maximum}°</span> 
     <span className="Forecast-min">{forecast.daily[0].temperature.minimum}°</span> 
     
    </div> 
    </div>
   </div>

  );
  


 } else{
  let city= props.city;
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=ac9185d0f8b9a1boc9ba4b9t42303979&units=metric`;

  axios.get(apiUrl).then(handleResponse);

return null;


  }
}
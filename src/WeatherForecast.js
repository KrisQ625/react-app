import React from "react";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props){

function handleResponse(response){
  console.log(response.data);
}

  
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=ac9185d0f8b9a1boc9ba4b9t42303979&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
   <div className="WeatherForecast">
    <div className="col">
     <div className="forecast-day"> Thu</div>
      <img alt ={props.data.description} src={props.data.icon_url} width ="5"/> 

          

    <div className="forecast-temp" >
       <span className="Forecast-max">19°</span> /
     <span className="Forecast-min">10°</span> 
    </div> 
    </div>
   </div>

  )
}
import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";


export default function Weatherinfo (props){
  return(  <div className="Weatherinfo">
        <div className="row">
    <div className="col-sm-6">
    <h1 className='text-capitalize d-sm-flex-justify-content-center'>{props.data.city}</h1>
    
  
      <div><FormattedDate date ={props.data.date}/> </div>
      <ul>
      <li className='text-capitalize'>{props.data.description}</li>
      
            <li >Humidity:{Math.round(props.data.humidity)}%</li>
            <li >Wind:{Math.round(props.data.wind)}km/h</li>
          
      </ul>
    </div>
        <div className="col-sm-6 justify-content-center">
   <WeatherTemperature celsius = {props.data.temperature}/>
<div className="Weather-img">
          <img  alt ={props.data.description} src={props.data.icon_url}/> 
      </div>
        </div>
        
      </div>
      </div>);
}
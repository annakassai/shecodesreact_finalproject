import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import "./WeatherInfo.css"; 

export default function WeatherInfo(props){
   return(
    <div className="WeatherInfo">
    <div className="innerContainer">
    <div className="row">
      <div className="col-12">
        <h1 className="current-city">{props.data.city}</h1>
        <h3 className="current-time"><FormattedDate date={props.data.date}/></h3>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-7">
          <h5 className="text-capitalize">{props.data.description}</h5>
          <div className="float-left">
            <WeatherIcon 
            code={props.data.icon} 
            alt={props.data.description}
            />  
          </div>
          <div className="temperature">
            <WeatherTemperature 
            celsius={props.data.temperature}
            />
          </div>
          <div className="additional-info">
            <h5 className="data"><i className="fas fa-bolt"></i> Pressure: {props.data.pressure} hPa</h5>
            <h5 className="data"><i className="fas fa-tint"></i> Humidity: {props.data.humidity} %</h5>        
            <h5 className="data"><i className="fas fa-wind"></i> Wind: {Math.round(props.data.wind)}km/h</h5>
          </div>
        </div>
      </div>
    </div>
  </div> 
 );
}
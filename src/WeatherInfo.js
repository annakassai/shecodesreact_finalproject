import React from "react";
import FormattedDate from './FormattedDate';
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css"; 

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
        <div className="col-6">
          <h5 className="text-capitalize">{props.data.description}</h5>
          <h5 className="local-temperature">
            {props.data.iconUrl}
            <span className="local-temperature">{Math.round(props.data.temperature)}</span>
            <span className="units"> °C | °F </span>
          </h5>
          <div className="additional-info">
            <h5 className="data"><i className="fas fa-bolt"></i> Pressure: {props.data.pressure} hPa</h5>
            <h5 className="data"><i className="fas fa-tint"></i> Humidity: {props.data.humidity} %</h5>        
            <h5 className="data"><i className="fas fa-wind"></i> Wind: {Math.round(props.data.wind)}km/h</h5>
          </div>
        </div>
        <div className="col-1">
            <p>0:00</p>
            <p>3:00</p>
            <p>6:00</p>
            <p>9:00</p>
            <p>0:00</p>
        </div> 
        <div className="col-2">
        <ReactAnimatedWeather
          icon = 'CLEAR_DAY'
          color = 'goldenrod'
          size = {25}
          animate = {true}
        />
         <ReactAnimatedWeather
          icon = 'PARTLY_CLOUDY_DAY'
          color = 'grey'
          size = {25}
          animate = {true}
        />
         <ReactAnimatedWeather
          icon = 'CLOUDY'
          color = 'darkblue'
          size = {25}
          animate = {true}
        />
        <ReactAnimatedWeather
          icon = 'CLEAR_DAY'
          color = 'goldenrod'
          size = {25}
          animate = {true}
        />
         <ReactAnimatedWeather
          icon = 'PARTLY_CLOUDY_DAY'
          color = 'grey'
          size = {25}
          animate = {true}
        />
        </div>    
        <div className="col-1">
          <p>5°C</p>
          <p>1°C</p>
          <p>2°C</p>
          <p>5°C</p>
          <p>4°C</p>
        </div>
      </div>
    </div>
  </div> 
 );
}
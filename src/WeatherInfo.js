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
        <h1 className="current-city">{props.data.city}, {props.data.country}</h1>
        <h3 className="current-time"><FormattedDate date={props.data.date}/></h3>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="wrapper">
            <h5 className="description">{props.data.description}</h5>
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
            </div>
          </div>
          <div className="col-5">
            <div className="additional-info">
              <h5 className="data"><i className="fas fa-tint"></i> Humidity: {props.data.humidity} %</h5>   
              <h5 className="data"><i className="fas fa-wind"></i> Wind: {Math.round(props.data.wind)} km/h</h5>
              <h5 className="data"><i className="fas fa-cloud"></i> Clouds: {props.data.clouds} %</h5>
              <h5 className="data"><i className="fas fa-eye"></i> Visibility: {(props.data.visibility)/1000} km</h5>
            </div>
          </div>
        </div>
       </div>
      </div>
      );
      }
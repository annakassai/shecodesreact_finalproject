import React, {useState} from "react"; 
import './Weather.css';
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready:false});

function handleResponse(response){
  console.log(response.data)
  setWeatherData({
    ready: true,
    city:response.data.name,
    date:'Sunday 21:21',
    description:response.data.weather[0].description,
    iconUrl:<ReactAnimatedWeather
    icon = 'CLEAR_DAY'
    color = 'goldenrod'
    size = {50}
    animate = {true}
    className="fasfasun"
    />,
    temperature:response.data.main.temp,
    pressure:response.data.main.pressure,
    humidity:response.data.main.humidity, 
    wind:response.data.wind.speed,
  })
}

if (weatherData.ready) {
  return (
    <div className="Weather">
     <div className="container">
       <form> 
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="searchengine"
              placeholder="🔍 Search for a city"
              autoFocus={true}
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-warning">
              Locate
            </button>
          </div>
         </div> 
        </form>
      </div>
    <div className="innerContainer">
    <div className="row">
      <div className="col-12">
        <h1 className="current-city">{weatherData.city}</h1>
        <h3 className="current-time">{weatherData.date}</h3>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h5 className="text-capitalize">{weatherData.description}</h5>
          <h5 className="local-temperature">
            {weatherData.iconUrl}
            <span className="local-temperature">{Math.round(weatherData.temperature)}</span>
            <span className="units"> °C | °F </span>
          </h5>
          <div className="additional-info">
            <h5 className="data"><i class="fas fa-bolt"></i> Pressure: {weatherData.pressure} hPa</h5>
            <h5 className="data"><i class="fas fa-tint"></i> Humidity: {weatherData.humidity} %</h5>        
            <h5 className="data"><i class="fas fa-wind"></i> Wind: {Math.round(weatherData.wind)}km/h</h5>
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

  } else {
   const apiKey = "1fd01a094c047ffda9a1022db88d180b";
   let units = `metric`;
   let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
   let apiUrl = `${apiEndpoint}?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;
   axios.get(apiUrl).then(handleResponse);

   return "Loading...";
  };
}
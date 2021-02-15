import React, {useState} from "react"; 
import './Weather.css';
import axios from "axios";
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast'; 

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready:false});
const [city, setCity] = useState(props.defaultCity);  

function handleResponse(response){
  console.log(response.data)
  setWeatherData({
    ready: true,
    city:response.data.name,
    date:new Date(response.data.dt*1000),
    description:response.data.weather[0].description,
    icon:response.data.weather[0].icon,
    temperature:response.data.main.temp,
    pressure:response.data.main.pressure,
    humidity:response.data.main.humidity, 
    wind:response.data.wind.speed,
  })
}

function search(){
  const apiKey = "1fd01a094c047ffda9a1022db88d180b";
  let units = `metric`;
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  search(); 
}

function handleCityChange(event){
  setCity(event.target.value); 
}

if (weatherData.ready) {
  return (
    <div className="Weather">
     <div className="container">
       <form onSubmit={handleSubmit}> 
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="searchengine"
              placeholder="🔍 Search for a city"
              autoFocus={true}
              autoComplete="off"
              onChange= {handleCityChange}
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
    <WeatherInfo data={weatherData}/>
    <WeatherForecast city={weatherData.city}/>
  </div>
  );
  } else {
   search(); 
   return "Loading...";
  };
}
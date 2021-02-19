import React, {useState} from "react"; 
import './WeatherSearchForm.css';
import axios from "axios";
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast'; 
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready:false});
const [city, setCity] = useState(props.defaultCity);  

function handleResponse(response){
  console.log(response.data)
  setWeatherData({
    ready: true,
    city:response.data.name,
    country:response.data.sys.country, 
    date:new Date(response.data.dt*1000),
    description:response.data.weather[0].description,
    icon:response.data.weather[0].icon,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    visibility:response.data.visibility,  
    wind:response.data.wind.speed,
    clouds:response.data.clouds.all,
    lon: response.data.coord.lon,
    lat: response.data.coord.lat,
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

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);   
}

function currentLocation(response) {
  let latitude = response.coords.latitude;
  let longitude = response.coords.longitude;
  let apiKey = "1fd01a094c047ffda9a1022db88d180b";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  
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
              placeholder=" Search for a city"
              autoFocus={true}
              autoComplete="off"
              onChange= {handleCityChange}
            />
          </div>
          <div className="col-3">
            <button 
              type="submit" 
              className="btn btn-secondary">
              Search
            </button>
          </div>
          <div className="col-3">
            <button 
              type="submit" 
              className="btn btn-warning" 
              onClick={getCurrentLocation}>
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
   return <Loader
   className="loading"
   type="ThreeDots"
   color="#2a292c"
   height={100}
   width={100}
   timeout={5000}
 />;
  };
}
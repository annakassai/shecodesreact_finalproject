import React from "react"; 
import './Weather.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
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
        <h1 className="data">Vienna</h1>
        <h3 className="data">21:21</h3>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h5 className="data">Sunny</h5>
          <h5 className="local-temperature">
            <ReactAnimatedWeather
              icon = 'CLEAR_DAY'
              color = 'goldenrod'
              size = {50}
              animate = {true}
              className="fasfasun"
            />
            <span className="temperature">22°C</span>
            <span className="units"> °C | °F </span>
          </h5>
          <h5 className="data"><i class="fas fa-bolt"></i> Pressure:1111 hPa</h5>
          <h5 className="data"><i class="fas fa-tint"></i> Humidity:17 %</h5>        
          <h5 className="data"><i class="fas fa-wind"></i> Wind:33 km/h</h5>
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
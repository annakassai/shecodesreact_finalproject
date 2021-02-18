import React, {useState} from "react"; 
import "./WeatherInfo.css"; 

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius"); 

    function displayFahrenheit(event){
        event.preventDefault(); 
        setUnit("fahrenheit");
    }

    function displayCelsius(event){
        event.preventDefault();
        setUnit("celsius"); 
    }

    if (unit === "celsius") {
    return(
      <div className="WeatherTemperature">
        <span className="local-temperature">{Math.round(props.celsius)}</span>
        <span className="units"> 
        °C | <a href="/" className="fahrenheit" onClick={displayFahrenheit}>°F</a>
        </span>
      </div>
    );
   } else {

    let fahrenheit = (props.celsius*5)/9 + 32; 
    return(
      <div className="WeatherTemperature">
        <span className="local-temperature">{Math.round(fahrenheit)}</span>
        <span className="units"> 
        <a href="/" className="celsius" onClick={displayCelsius}>°C</a> | °F
        </span>
      </div>
    )
   }
}
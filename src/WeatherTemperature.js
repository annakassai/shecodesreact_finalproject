import React, {useState} from "react"; 

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
        °C | <a href="/" onClick={displayFahrenheit}>°F</a>
        </span>
      </div>
    );
   } else {

    let fahrenheit = (props.celsius*5)/9 + 32; 
    return(
        <div className="WeatherTemperature">
        <span className="local-temperature">{Math.round(fahrenheit)}</span>
        <span className="units"> 
        <a href="/" onClick={displayCelsius}>°C</a> | °F
        </span>
      </div>
    )
   }
}
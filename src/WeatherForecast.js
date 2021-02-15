import React, {useState} from "react"; 
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import './WeatherForecast.css'; 

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false); 
    const [forecast, setForecast] = useState(false); 

    function handleForecastResponse(response){
        setForecast(response.data); 
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
      return(
        <div className="WeatherForecast row">
          {forecast.list.slice(0, 5).map(function(forecastItem){
          return <WeatherForecastPreview data={forecast.list[0]}/>; 
        })}
        </div>
       );
    } else {
    const apiKey = "1fd01a094c047ffda9a1022db88d180b";
    let unit = "metric"
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/forecast";
    let apiUrl = `${apiEndpoint}?q=${props.city}&appid=${apiKey}&units=${unit}`;
    
    axios.get(apiUrl).then(handleForecastResponse)

    return null; 
    }
   }
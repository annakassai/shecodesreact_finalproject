import React from "react"; 
import WeatherIcon from "./WeatherIcon"; 

export default function WeatherForecastPreview(props){
    function hours(){
        let date = new Date (props.data[0].dt*1000);
        let hours = date.getHours();
        
        return `${hours}:00`; 
    }

    function temperature(){
        let temperature = Math.round(props.data[0].main.temp)

        return `${temperature}°C`
    }

    return (
        <div className="col-2">
            <WeatherIcon code={props.data[0].weather[0].icon}/>
        </div>
    ); 
} 
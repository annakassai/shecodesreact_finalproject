import React from "react"; 
import WeatherIcon from "./WeatherIcon"; 
import "./WeatherForecastPreview.css"; 

export default function WeatherForecastPreview(props) {
    function hours() {
      let date = new Date(props.data.dt*1000);
      let hours = date.getHours();
      return `${hours}:00`;
    }

    function temperature(){
        let temperature = Math.round(props.data.main.temp)

        return `${temperature}°C`
    }

    return (
        <div className="WeatherForecastPreview">
           <hr/> 
            <div className="col-2">
                {hours()}
                <WeatherIcon code={props.data.weather[0].icon}/>
                {temperature()}
            </div>
           <hr/> 
        </div>
    ); 
} 
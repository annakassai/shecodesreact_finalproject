import React from 'react';

export default function FormattedDate(props) {

    let days = [
       "Sunday",
       "Monday",
       "Tuesday", 
       "Wednesday", 
       "Thursday", 
       "Friday", 
       "Saturday",  
    ]; 

    let months = [
       "Jan", 
       "Feb", 
       "Mar", 
       "Apr", 
       "May", 
       "Jun", 
       "Jul", 
       "Aug", 
       "Sep", 
       "Oct", 
       "Nov", 
       "Dec", 
    ]

    let date = props.date.getDate();
    let month = months[props.date.getMonth()]; 
    let day = days[props.date.getDay()]; 
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`; 
     }
    let minutes = props.date.getMinutes(); 
    if (minutes < 10) {
       minutes = `0${minutes}`; 
    }

    return `${day} | ${month} ${date} | ${hours}:${minutes}`; //last updated  
}
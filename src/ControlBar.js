import React from 'react'
import "./ControlBar.css"

function ControlBar(props){

    async function callApi(){
        let callStr = "https://api.open-meteo.com/v1/forecast?"
        callStr += `latitude=${props.clickedCoords.lat}&longitude=${props.clickedCoords.lng}`
        callStr += `&hourly=temperature_2m,dewpoint_2m,apparent_temperature,precipitation_probability,cloudcover`
        callStr += `&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min`
        callStr += `&current_weather=true&temperature_unit=fahrenheit&timezone=auto`
        console.log("Calling api at " + callStr)
        const response = await fetch(callStr)
        const weatherData = await response.json()        
        props.setWeatherData(weatherData)
    }

    return(
        <div className="controlBar">
            <h2 className="selected">Selected location:{props.clickedCoords.lat}, {props.clickedCoords.lng}</h2>
            <button className="selectButton" onClick={callApi}>Get Data</button>


        </div>
    )

}

export default ControlBar;
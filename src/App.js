import './App.css';
import MapComponent from './MapComponent.js';
import ChartComponent from './ChartComponent.js'
import ControlBar from './ControlBar.js';
import CurrentBar from './CurrentBar.js'
import {useState} from 'react'
import testData from './testdata.js'

function parseHourly(origData){
  let data = []
    for (let i = 0; i < origData.hourly.time.length; i++){
        let tempObj = {}
        for (let key of Object.keys(origData.hourly)){
            tempObj[key] = origData.hourly[key][i] 
        }
        data.push(tempObj)
    }
  return data
}

function App() {
  const [clickedCoords, setClickedCoords] = useState({lat: 30.000, lng: -90.000})
  const [weatherData, setWeatherData] = useState(testData)
  let parsedHourly = []
  const currentWeather = {}
  if (Object.keys(weatherData).length !== 0){
    parsedHourly = parseHourly(weatherData)
    const currentTime = weatherData.current_weather.time
    const currentIndex = weatherData.hourly.time.indexOf(currentTime)
    currentWeather.temperature = weatherData.hourly.temperature_2m[currentIndex]
    currentWeather.dewpoint = weatherData.hourly.dewpoint_2m[currentIndex]
    currentWeather.apparent = weatherData.hourly.apparent_temperature[currentIndex]
    currentWeather.wetbulb = currentWeather.temperature - ((currentWeather.temperature - currentWeather.dewpoint) / 3)
  }
  
  
  return (
    <div className="App">
      <h1>Temperature data</h1>
      <MapComponent setClicked={setClickedCoords}/>
      <ControlBar clickedCoords={clickedCoords} setWeatherData={setWeatherData}/>
      {Object.keys(weatherData).length !== 0 ? <CurrentBar current={currentWeather}/>: null}
      {Object.keys(weatherData).length !== 0 ? <ChartComponent data={parsedHourly} variables={["temperature_2m", "apparent_temperature", "dewpoint_2m"]} labels={["Temperature", "Dew Point", "Apparent Temperature"]}/> : null}
      {Object.keys(weatherData).length !== 0 ? <ChartComponent data={parsedHourly} variables={["precipitation_probability", "cloudcover"]} labels={["Precipitation %", "Cloud Cover"]}/> : null}
    </div>
  );
}

export default App;

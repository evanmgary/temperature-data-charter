import logo from './logo.svg';
import './App.css';
import MapComponent from './MapComponent.js';
import ControlBar from './ControlBar.js';
import {useState} from 'react'

function App() {
  const [clickedCoords, setClickedCoords] = useState({lat: null, lng: null})
  return (
    <div className="App">
      <h1>Temperature data</h1>
      <MapComponent setClicked={setClickedCoords}/>
      <ControlBar clickedCoords={clickedCoords} />
    </div>
  );
}

export default App;

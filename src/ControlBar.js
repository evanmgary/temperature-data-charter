import React from 'react'
import "./ControlBar.css"

function ControlBar(props){

    return(
        <div className="controlBar">
            <h2 className="selected">Selected location:{props.clickedCoords.lat}, {props.clickedCoords.lng}</h2>
            <button className="selectButton">Get Data</button>


        </div>
    )

}

export default ControlBar;
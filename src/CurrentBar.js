import React from 'react'
import './CurrentBar.css'

function CurrentBar(props){
    return(
        <div>
            <h3>Temperature: {props.current.temperature}  Dew Point: {props.current.dewpoint}</h3>
            <h3>Apparent Temperature: {props.current.apparent}  Wet Bulb: {props.current.wetbulb}</h3>
        </div>
    )
}

export default CurrentBar
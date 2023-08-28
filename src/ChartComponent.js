import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import testData from "./testdata.js"
import "./ChartComponent.css"

function ChartComponent(props){
    
    
    
    return(
        <div className="chartComponent">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={props.data}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="time"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature_2m" stroke="blue" activeDot={{r: 5}} />
                    <Line type="monotone" dataKey="dewpoint_2m" stroke="green" activeDot={{r: 5}} />
                    <Line type="monotone" dataKey="apparent_temperature" stroke="red" activeDot={{r: 5}} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartComponent
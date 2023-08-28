import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import testData from "./testdata.js"
import "./ChartComponent.css"

function ChartComponent(props){
    const colors = {
        temperature_2m: "blue", dewpoint_2m: "green", apparent_temperature: "red", precipitation_probability: "skyblue", cloudcover: "grey"
    }
    
    
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
                    {
                        props.variables.map(item => {
                            return(
                                    <Line type="monotone" dataKey={item} stroke={colors[item]} activeDot={{r: 5}} />
                            )
                        })
                    }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartComponent
import React, { useRef, useState } from "react";
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css" 
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerRetina from "leaflet/dist/images/marker-icon-2x.png"
import "./MapComponent.css"

function MapComponent(props){
    const mapRef = useRef()
    const center = {lat: 30.05, lng: -90.00}
    return(
        <MapContainer ref={mapRef} center={center} zoom={10} style={{height: "500px", width: "1fr"}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


        </MapContainer>
    )

}

export default MapComponent
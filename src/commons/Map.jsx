import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      className="h-[100%] w-[100%] z-10"
      center={[-24.78768567820799, -65.40882299856143]}
      zoom={30}
      scrollWheelZoom={true}
    >
      <TileLayer
        className="z-10"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-24.78768567820799, -65.40882299856143]}>
        <Popup className="z-10">Hostal El Cerrito, Salta Capital</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

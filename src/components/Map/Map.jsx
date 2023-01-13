// @flow
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Routing } from "../Routing/Routing";

export const Map = () => {
  return (
    <MapContainer center={[55.75583, 37.6173]} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
    </MapContainer>
  );
};

// @flow
import * as React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Routing } from "./Routing";

export const Map = (props) => {
  return (
    <MapContainer center={[55.7522, 37.6156]} zoom={10}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
    </MapContainer>
  );
};

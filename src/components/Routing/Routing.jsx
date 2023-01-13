import { useEffect } from "react";
import { useSelector } from "react-redux";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export const Routing = () => {
  const markedOrder = useSelector((state) => state.orderReducer.showOrder);

  const { latFrom, lngFrom, latTo, lngTo } = markedOrder;

  const map = useMap();

  useEffect(() => {
    if (!map) return;
    let markerArray = [];
    markerArray.push(
      L.marker([+latFrom, +lngFrom]),
      L.marker([+latTo, +lngTo])
    );
    const group = L.featureGroup(markerArray).addTo(map);
    map.fitBounds(group.getBounds());

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(+latFrom, +lngFrom), L.latLng(+latTo, +lngTo)],
      routeWhileDragging: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, markedOrder]);

  return null;
};

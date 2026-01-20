import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

// Import the marker icons directly instead of using require
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Marker icon fix for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LocationMarker = ({ setCoordinates }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      setCoordinates({ lat, lng });
    },
  });

  return position === null ? null : <Marker position={position} />;
};

const LocationMap = ({ setCoordinates }) => {
  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mt-8">
      <MapContainer
        center={[20.5937, 78.9629]} // Center to India
        zoom={5}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <LocationMarker setCoordinates={setCoordinates} />
      </MapContainer>
    </div>
  );
};

export default LocationMap;

import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

interface StoreMapProps {
  lat: number;
  lng: number;
}

const StoreMap: React.FC<StoreMapProps> = ({ lat, lng }) => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat, lng }}>
    {" "}
    <Marker position={{ lat, lng }} />
  </GoogleMap>
);
export default withScriptjs(withGoogleMap(StoreMap));

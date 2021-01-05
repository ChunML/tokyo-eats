import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

const StoreMap: React.FC = ({ google }) => (
  <Map google={google} className="max-w-screen-lg p-2 max-h-80" />
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyA6AeC5dGW3SAdWY8Xz32za_XBQLLwBHng",
})(StoreMap);

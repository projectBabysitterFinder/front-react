import React  from "react";
import { Map, TileLayer } from "react-leaflet";
import Markers from '../Markers';
import "leaflet/dist/leaflet.css";

const MapView = () => {
  // const [state, setState] = useState({
  //   currentLocation: { lat: '40.528845', lng: '-0.302728' },
  //   zoom: 2,
  // });

  return (
    <Map center={{lat: '40.528845', lng: '-0.302728'}} zoom={2}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers/>
    </Map>
  );
};

export default MapView;

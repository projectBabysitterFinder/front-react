import React  from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkersModal from '../MarkersModal';
import "leaflet/dist/leaflet.css";

const MapViewModal = (props) => {
  // const [state, setState] = useState({
  //   currentLocation: { lat: '40.528845', lng: '-0.302728' },
  //   zoom: 2,
  // });

  return (
    <Map center={{lat: props.DES_ADDRESS_LAT, lng: props.DES_ADDRESS_LAT}} zoom={2}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkersModal DES_ADDRESS_LAT={props.DES_ADDRESS_LAT} DES_ADDRESS_LONG={props.DES_ADDRESS_LONG}/>
    </Map>
  );
};

export default MapViewModal;

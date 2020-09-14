import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from '../IconLocation';

const MarkersModal = (props) => {

  return (
    <div>
      <Marker position={{lat: props.DES_ADDRESS_LAT, lng: props.DES_ADDRESS_LONG}} icon={IconLocation} />
    </div>
  )
}

export default MarkersModal;
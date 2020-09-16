import React from 'react';
import { useServer } from '../Contex/Server';
import { Marker } from 'react-leaflet';
import { IconLocation } from '../IconLocation';

const Markers = () => {
  const { service } = useServer();

  return (
    <div>
      {service.map((servi, index) => (
        <div key={index}>
          <Marker
            position={{
              lat: servi.DES_ADDRESS_LAT,
              lng: servi.DES_ADDRESS_LONG,
            }}
            icon={IconLocation}
          />
        </div>
      ))}
    </div>
  );
};

export default Markers;

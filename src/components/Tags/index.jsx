import React from 'react';
import '../../sass/tags.scss';

const Tags = (props) => {
  const {
    DES_DATA_SERVICE_TIME,
    DES_DATA_SPECIALTIES,
    DES_DATA_ABILITIES,
  } = props;

  return (
    <div className='tags'>
      {DES_DATA_SERVICE_TIME !== undefined && (
        <div className='TagsService'>
          <p>{DES_DATA_SERVICE_TIME}</p>
        </div>
      )}
      {DES_DATA_SPECIALTIES !== undefined &&
      DES_DATA_SPECIALTIES !== null &&
      DES_DATA_SPECIALTIES.length !== 0
        ? DES_DATA_SPECIALTIES.map((specialty, index) => (
            <div key={index} className='TagsSpecialties'>
              <p>{specialty}</p>
            </div>
          ))
        : ''}
      {DES_DATA_ABILITIES !== undefined &&
      DES_DATA_ABILITIES !== null &&
      DES_DATA_ABILITIES.length !== 0
        ? DES_DATA_ABILITIES.map((specialty, index) => (
            <div key={index} className='TagsSpecialties'>
              <p>{specialty}</p>
            </div>
          ))
        : ''}
    </div>
  );
};

export default Tags;

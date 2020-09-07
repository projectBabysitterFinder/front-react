import React from 'react';

const index = ({ error }) => {
  console.log('campo error:', error);
  return (
    <div className='messageError'>
      <h1>{error.status}</h1>
      <h2> La url no esta disponible por el momento </h2>
    </div>
  );
};

export default index;

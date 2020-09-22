import React from 'react';
import MxImg from '../../assets/images/Flags/mx.png'; // Solo componentes inician en mayuscula
import '../../sass/mx.scss';

const Mx = () => {
  return (
    <div className='mx'>
      <img className='mx--img' src={MxImg} alt='Mexico' />
    </div>
  );
};

export default Mx;

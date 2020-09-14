import React from 'react';
import { useServer } from '../Contex/Server';
import Picker from '../Picker';
import '../../sass/modalHalfTime.scss';

const ModalHalfTime = (props) => {
  const { openHalfTime } = props;

  const { modalCloseHalf, buttonDay } = useServer();

  if (openHalfTime === false) {
    return null;
  }

  const checkDay = () => {
    buttonDay();
  };

  return (
    <main className='modalHalf'>
      <div className='modalHalf-card'>
        <div className='container__half'>
          <button onClick={modalCloseHalf} className='half__close'>
            <div className='half-close--half'> X </div>
          </button>
        </div>
        <h1>Selecciona el dia para tomar el servicio</h1>
        <section className='picker'>
          <Picker />
        </section>
        <div className='modalHalf-card__bnt'>
          <button onClick={checkDay} className='modalHalf--btnHalf'>
            Continuar
          </button>
        </div>
      </div>
    </main>
  );
};

export default ModalHalfTime;

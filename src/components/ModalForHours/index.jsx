import React from 'react';
import { useServer } from '../Contex/Server';
import Picker from '../Picker';
import '../../sass/modalForHours.scss';

const ModalForHours = (props) => {
  const { openHours } = props;

  const { modalCloseHours, buttonDay, cantHours } = useServer();

  if (openHours === false) {
    return null;
  }

  const checkHours = () => {
    buttonDay();
  };

  const handleChange = (e) => {
    cantHours(e.target.value);
  };

  return (
    <main className='modalHours'>
      <div className='modalHours-card'>
        <div className='container__hours'>
          <button onClick={modalCloseHours} className='hours__close'>
            <div className='hours-close--hours'> X </div>
          </button>
        </div>
        <h1 className='card__h1'>Selecciona el dia y la cantidad de horas</h1>
        <section className='picker'>
          <Picker />
        </section>
        <section className='formH'>
          <form className='formH__cant'>
            <label className='formH__cant--label'>
              Seleccione la cantidad de horas
              <select id={1} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </label>
          </form>
        </section>
        <div className='modalHours-card__bnt'>
          <button onClick={checkHours} className='modalHours--btnHours'>
            Continuar
          </button>
        </div>
      </div>
    </main>
  );
};

export default ModalForHours;

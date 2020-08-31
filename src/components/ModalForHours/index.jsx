import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/modalForHours.scss';

var nanaHours = [];
var today = new Date();

const ModalForHours = (props) => {
  const { openHours } = props;

  const { modalCloseHours, buttonDay, Idd, valueDate, hours } = useServer();

  if(Idd.length !== 0) {
    nanaHours = [Idd[0].forHours];
  } 

  if (openHours === false) {
    return null;
  }

  const checkHours = () => {
    if (hours.length === 0) {
      alert('Por favor selecciona la fecha');
    } else {
      buttonDay();
    }
  };

  return (
    <main className='modalHours'>
      <div className='modalHours-card'>
        <div className='container__hours'>
          <button onClick={modalCloseHours} className='hours__close'>
            <div className='hours-close--hours'> X </div>
          </button>
        </div>
        <h1>Selecciona el dia y la hora</h1>
        
        <div className='date__nanaTwo'>
          {nanaHours[0].map((id, index) => (
            <React.Fragment key={index}>
              <section className='date__nana'>
                {Date.parse(id.date) < today.getTime() ? 
                <div className='nana__time'>
                  <div className='nana__date'>
                    <p>{id.date}</p>
                    <button id={index+1} value={Object.values(id)} onClick={()=>valueDate(index+1)}>Seleccionar</button>
                  </div>
                  <div className='nana__star'>
                    <p>{id.star}</p> 
                    <p>{id.end}</p>
                  </div> 
                </div> : '' }
              </section>
            </React.Fragment>
          ))}
        </div>
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

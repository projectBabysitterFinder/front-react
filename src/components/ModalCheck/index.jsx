import React from 'react';
import { useServer } from '../Contex/Server';
import Colombia from '../Colombia';
import Mx from '../Mx';
import { Link } from 'react-router-dom';
import '../../sass/modalCheck.scss';

const ModalCheck = (props) => {

  const { openCheck, time } = props;

  const {
    modalCloseCheck,
    child,
    agee,
    flagV,
    form,
    date,
    totalValue,
    day,
    hours,
    finalTotalValue,
    Idd
  } = useServer();

  if (openCheck === false) {
    return null;
  }

  const calculateTime = (e) => {
    if(parseInt(e) < 13 ) {
      if(parseInt(e) === 12) {
        return (e + ' pm')
      } else {
        return (e + ' am');
      }
    } else {
      return ((parseInt(e)-12) + ' pm');
    }
  }

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

  return (
    <main className='check'>
      <div className='check-card'>
        <div className='check__add'>
          <button onClick={modalCloseCheck} className='check__close'>
            <div className='add-close--check'> X </div>
          </button>
        </div>
        <h1>Verifica tus Datos</h1>
        <section className='check-card--check'>
          <h2>Nombre:</h2>
          <p>{form[0]}</p>
          <h2>Fecha:</h2>
          <p>{hours.length === 0 ? date.toLocaleDateString() : hours[0]}</p>
          <h2>Jornada:</h2>
          {day === '' && hours.length === 0 ? <p>{time}</p> : hours.length !== 0 ? 
            <div className='star--end'><p>Llegada: {calculateTime(hours[1])}</p><p>Salida: {calculateTime(hours[2])}</p></div>
          : <p>{day}</p>}
          <h2>E-mail</h2>
          <p>{form[1]}</p>
          <span>
            {flagV === 'Colombia' ? <Colombia /> : null}
            {flagV === 'México' ? <Mx /> : null}
          </span>
          <p>{form[2]}</p>
          {child.map((child, index) => (
            <React.Fragment key={index}>
              <h2>{child}</h2>
              {agee[index] === 1 ? (
                <p>{`${agee[index]} Año`}</p>
              ) : (
                <p>{`${agee[index]} Años`}</p>
              )}
            </React.Fragment>
          ))}
          <h2>Dirección</h2>
          <p>{form[3]}</p>
          <h2>Recomendaciones</h2>
          <p>{form[4]}</p>
          <h2 className='check-card--value'>Valor a cancelar</h2>
          {/* {removeAccents(Idd[0].DES_COUNTRY).toUpperCase() === 'COLOMBIA' ? console.log('Igual')
          : console.log('No es igual')} */}
        </section>
        <div className='button__pay'>
          <Link to='/nana'>
            <button onClick={totalValue} className='button__pay--next'>
              Pagar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ModalCheck;

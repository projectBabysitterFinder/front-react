import React from 'react';
import { useServer } from '../Contex/Server';
import { Link } from 'react-router-dom';
import '../../sass/modalCheck.scss';

var clientOnly = [];

const ModalCheck = (props) => {
  const { openCheck, time } = props;

  const {
    modalCloseCheck,
    form,
    date,
    totalValue,
    hours,
    users,
    child,
    agee,
    valueHours,
    Idd,
  } = useServer();

  if (openCheck === false) {
    return null;
  }

  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const idClient = localStorage.getItem('id');

  if (clientOnly.length === 0) {
    clientOnly = users.filter((user) => user.ID === parseInt(idClient));
  }

  const valueToPay = () => {
    if (removeAccents(clientOnly[0].DES_COUNTRY).toUpperCase() === 'COLOMBIA') {
      const cop = ' COP';
      if (valueHours !== 0) {
        return (
          parseInt(valueHours) *
          parseInt(Idd[0].NUM_HOURLY_RATE) *
          parseInt(child.length)
        )
          .toString()
          .concat(cop);
      } else {
        return (
          parseInt(Idd[0].NUM_VALUE) *
          parseInt(Idd[0].NUM_HOURLY_RATE) *
          parseInt(child.length)
        )
          .toString()
          .concat(cop);
      }
    } else {
      const mxn = ' MXN';
      if (valueHours !== 0) {
        return (
          parseInt(valueHours) *
          parseInt(Idd[0].NUM_HOURLY_RATE) *
          parseInt(child.length)
        )
          .toString()
          .concat(mxn);
      } else {
        return (
          parseInt(Idd[0].NUM_VALUE) *
          parseInt(Idd[0].NUM_HOURLY_RATE) *
          parseInt(child.length)
        )
          .toString()
          .concat(mxn);
      }
    }
  };

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
          <p>{clientOnly[0].DES_FULLNAME}</p>
          <h2>Fecha:</h2>
          <p>{hours.length === 0 ? date.toLocaleDateString() : hours[0]}</p>
          <h2>Jornada:</h2>
          <p>{time}</p>
          <h2>E-mail</h2>
          <p>{clientOnly[0].DES_EMAIL}</p>
          <h2>Dirección</h2>
          <p>{clientOnly[0].DES_ADDRESS}</p>
          <h2>Recomendaciones</h2>
          <p>{form[4]}</p>
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
          <h2 className='check-card--value'>Valor a cancelar</h2>
          <p>{valueToPay()}</p>
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

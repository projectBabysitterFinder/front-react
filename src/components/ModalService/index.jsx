import React from 'react';
import { useServer } from '../Contex/Server';
import { Link } from 'react-router-dom';
import MapViewModal from '../MapViewModal'
import '../../sass/modalService.scss';

const ModalService = (props) => {

  const { openService2 } = props;

  const {
    modalCloseService,
    onlyService,
    confirm
  } = useServer();

  if (openService2 === false) {
    return null;
  }

  const schedule = () => {
    for(let i=0; i<onlyService[0].DES_DATA_HOURS.length; i++) {
      if(onlyService[0].DES_DATA_HOURS[i].DISPONIBILIDAD) {
        return (onlyService[0].DES_DATA_HOURS[i].MODALIDAD)
      }
    }
  }

  return (
    <main className='serviceC'>
      <div className='serviceC-card'>
        <div className='serviceC__add'>
          <button onClick={modalCloseService} className='serviceC__close'>
            <div className='add-close--serviceC'> X </div>
          </button>
        </div>
        <h1>Verifica tus Datos</h1>
        <section className='serviceC-card--serviceC'>
          <h2>Nombre:</h2>
          <p>Esto hay que cambiarlo</p>
          <h2>Fecha:</h2>
          <p>Esto hay que cambiarlo</p>
          <h2>Jornada:</h2>
          <p>{schedule()}</p>
          <h2>E-mail</h2>
          <p>{onlyService[0].DES_EMAIL}</p>
          <h2>Teléfono</h2>
          <p>{onlyService[0].DES_PHONE}</p>
          <h2>Dirección</h2>
          <p>{onlyService[0].DES_ADDRESS}</p>
          <h2>Recomendaciones</h2>
          <p>{onlyService[0].DES_RECOMMENDATIONS}</p>
          <h2 className='serviceC-card--value'>Valor cancelado</h2>
          <p>{onlyService[0].NUM_TOTAL_COST}</p>
        </section>
        <section className='mapModal'>
          <h3>Lugar para prestar el servicio</h3>
          <div className='mapModal__nana'>
            <MapViewModal DES_ADDRESS_LAT={onlyService[0].DES_ADDRESS_LAT} DES_ADDRESS_LONG={onlyService[0].DES_ADDRESS_LONG}/>
          </div>
        </section>
        <div className='button__serviceC'>
          <Link to='/nana/perfil/11'>
            <button className='button__serviceC--next' onClick={confirm}>
              Cerrar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ModalService;

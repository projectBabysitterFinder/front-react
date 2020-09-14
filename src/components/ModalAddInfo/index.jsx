import React from 'react';
import { useServer } from '../Contex/Server';
import Forms from '../Forms';
import '../../sass/modalAddInfo.scss';

const ModalAddInfo = (props) => {
  const { openAdd } = props;
  const { modalCloseAdd } = useServer();

  if (openAdd === false) {
    return null;
  }

  return (
    <main className='modalA'>
      <div className='modalA-card'>
        <div className='container__add'>
          <button onClick={modalCloseAdd} className='add__close'>
            <div className='add-close--container'> X </div>
          </button>
        </div>
        <h1>Ingresa tu Información</h1>
        <p>Para diligenciar este formulario debes estar en el lugar donde se prestará el servicio debido a que la dirección quedará guardada por geolocalización</p>
        <section className='form'>
          <Forms />
        </section>
      </div>
    </main>
  );
};

export default ModalAddInfo;

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
        <h1>
          Por favor ingresa el genero y la edad de cada niño y una recomendación
          para nana
        </h1>
        <section className='form'>
          <Forms />
        </section>
      </div>
    </main>
  );
};

export default ModalAddInfo;

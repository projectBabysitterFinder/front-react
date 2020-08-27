import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/cardDate.scss';

const CardDate = (props) => {
  const { open } = props;

  const {modalClose } = useServer();

  if (open === false) {
    return null;
  }

  return (
    <main className='modal'>
      <div className='modal-card'>
        <div className='modal-card__facts-container'>
            <div className='modal-card__number-gen-cont'>
              <button onClick={modalClose} className='modal-card__button-close-container'><div className='modal-card__button-close'> X </div></button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CardDate;
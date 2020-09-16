import React from 'react';
import '../../sass/cardNana.scss';
import Button from '../Button';
import Tags from '../Tags';
import Star from '../Star/index';

const img = 'http://dummyimage.com/239x191.jpg/5fa2dd/ffffff';

const cardNana = (props) => {
  const {
    ID,
    DES_FULLNAME,
    DES_URL_IMAGE,
    description,
    NUM_STARS,
    DES_DATA_SPECIALTIES,
    DES_DATA_SERVICE_TIME,
  } = props;

  return (
    <div className='container'>
      <section className='container__card'>
        <article className='imgButton'>
          <img
            src={
              DES_URL_IMAGE === null
                ? 'http://dummyimage.com/239x191.jpg/5fa2dd/ffffff'
                : DES_URL_IMAGE
            }
            // src={require('../../assets/images/Nanas/maria-sandobal.png')}
            alt={DES_FULLNAME}
          />
          <Button ID={ID} name={'Más Información'} />
        </article>
        <article className='article'>
          <div className='nameScore'>
            <h2>{DES_FULLNAME}</h2>
            <div>{<Star score={NUM_STARS}></Star>}</div>
          </div>
          <div className='data__nana'>
            <h2>Disponibilidad:</h2>
            <Tags DES_DATA_SERVICE_TIME={DES_DATA_SERVICE_TIME} />
            <h2>Especialidad:</h2>
            <Tags DES_DATA_SPECIALTIES={DES_DATA_SPECIALTIES} />
          </div>
          <p className='article--description'>{description}</p>
        </article>
      </section>
    </div>
  );
};

export default cardNana;

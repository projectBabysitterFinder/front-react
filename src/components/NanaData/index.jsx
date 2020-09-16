import React from 'react';
import Tags from '../Tags';
import Star from '../Star';
import { Link } from 'react-router-dom';
import { useServer } from '../Contex/Server';
import '../../sass/nanaData.scss';

const NanaData = (props) => {
  const {
    ID,
    DES_FULLNAME,
    description,
    NUM_STATUS,
    DES_DATA_STUDIES,
    DES_DATA_EXPERIECE,
    DES_DATA_ABILITIES,
    DES_DATA_SERVICE_TIME,
    DES_DATA_SPECIALTIES,
    to,
    nameButton,
    nameButton2,
    DES_URL_IMAGE,
    DES_COUNTRY,
    DES_STATE,
    DES_CITY,
  } = props;

  var { modalOpen } = useServer();

  const toOpen = () => {
    var openContratar = document.getElementById(ID).value;
    modalOpen(parseInt(openContratar));
  };

  return (
    <div className='nana'>
      <article className='nana__photo'>
        <img src={DES_URL_IMAGE} alt={DES_FULLNAME} />
        <div className='button'>
          <button id={ID} value={ID} onClick={toOpen}>
            {nameButton}
          </button>
          <div>
            <Link to={to}>
              <button>{nameButton2}</button>
            </Link>
          </div>
        </div>
      </article>
      <section className='nana__data'>
        <article className='text'>
          <div className='score'>
            <h2>Promedio de calificaciones:</h2>
            <div className='star'>
              <Star score={NUM_STATUS} name={DES_FULLNAME} />
            </div>
          </div>
          <div className='text__information'>
            <h2 className='text__information--name'>Nombre:</h2>
            <p className='name--nana'>{DES_FULLNAME}</p>
            <h2>Disponibilidad:</h2>
            <div className='text__information--time'>
              <Tags DES_DATA_SERVICE_TIME={DES_DATA_SERVICE_TIME} />
            </div>
            <h2>País:</h2>
            <p className='text__information--paragraph'>{DES_COUNTRY}</p>
            <h2>Estado:</h2>
            <p className='text__information--paragraph'>{DES_STATE}</p>
            <h2>Ciudad</h2>
            <p className='text__information--paragraph'>{DES_CITY}</p>
          </div>
          <p className='name__description'>{description}</p>
        </article>
        <section className='nana__studies'>
          <article className='title__studies'>
            <ul className='info__studies'>
              <h2 className='info__studies--h2'>Estudios</h2>
              {DES_DATA_STUDIES.map((experience, index) => (
                <span key={index}>
                  <div className='info__institution'>
                    <h2>Título</h2>
                    <li>{DES_DATA_STUDIES[index].TITULO}</li>
                    <h2>Institución</h2>
                    <li>{DES_DATA_STUDIES[index].INSTITUCIÓN}</li>
                    <h2>Año</h2>
                    <li>{DES_DATA_STUDIES[index].AÑO}</li>
                  </div>
                </span>
              ))}
            </ul>
          </article>
        </section>
        <article className='nana__experience'>
          <ul className='info__experience'>
            <h2 className='info__experience--h2'>Experiencia</h2>
            {DES_DATA_EXPERIECE.map((experience, index) => (
              <span key={index}>
                <div className='info__expe'>
                  <h2>Inicio</h2>
                  <li>{DES_DATA_EXPERIECE[index].INICIO}</li>
                  <h2>Tareas</h2>
                  <li>{DES_DATA_EXPERIECE[index].TAREAS}</li>
                  <h2>Empresa</h2>
                  <li>{DES_DATA_EXPERIECE[index].EMPRESA}</li>
                </div>
              </span>
            ))}
          </ul>
        </article>
        <section className='skill'>
          <h2 className='skill--h2'>Habilidades</h2>
          <ul>
            <li>
              <Tags DES_DATA_ABILITIES={DES_DATA_ABILITIES} />
            </li>
          </ul>
        </section>
        <section className='specialties'>
          <h2 className='specialties--h2'>Especialidades</h2>
          <ul>
            <li>
              <Tags DES_DATA_SPECIALTIES={DES_DATA_SPECIALTIES} />
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default NanaData;

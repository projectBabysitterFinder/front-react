import React from 'react';
import Tags from '../Tags';
import Star from '../Star';
import { Link } from 'react-router-dom';
import { useServer } from '../Contex/Server';
import '../../sass/nanaDataProfile.scss';

const NanaDataProfile = (props) => {
  const {
    ID,
    DES_FULLNAME,
    description,
    NUM_STATUS,
    DES_DATA_STUDIES,
    DES_DATA_EXPERIECE,
    DES_DATA_ABILITIES,
    DES_DATA_SPECIALTIES,
    nameButton,
    nameButton2,
    DES_URL_IMAGE,
    DES_COUNTRY,
    DES_STATE,
    DES_CITY,
    DES_NAME
  } = props;

  var { pageEdit, pageService } = useServer();

  const toEdit = () => {
    var openEdit = document.getElementById(ID).value;
    pageEdit(parseInt(openEdit));
  };

  const toService = () => {
    var openService = document.getElementById(ID).value;
    pageService(parseInt(openService));
  };

  return (
    <div className='profileN'>
      <article className='profileN__photo'>
        <img
          src={DES_URL_IMAGE}
          alt={DES_FULLNAME}
        />
        <div className='button__profileN'>
            <Link to={`/nana/editar/${ID}`}>
              <button id={ID} value={ID} onClick={toEdit}>{nameButton}</button>
            </Link>
          <div>
            <Link to={`/nana/servicios/${ID}`}>
              <button id={ID} value={ID} onClick={toService}>{nameButton2}</button>
            </Link>
          </div>
        </div>
      </article>
      <section className='profileN__data'>
        <article className='text__profileN'>
          <div className='score__profileN'>
            <h2>Promedio de calificaciones:</h2>
            <div className='star__profileN'>
              <Star score={NUM_STATUS} name={DES_FULLNAME} />
            </div>
          </div>
          <div className='text__profileN__data'>
            <h2 className='text__profileN__data--h2'>Nombre:</h2>
            <p className='name--profileN'>{DES_FULLNAME}</p>
            <h2>Disponibilidad:</h2>
            <div className='text__information--profileN'>
              <Tags DES_DATA_SERVICE_TIME={DES_NAME} />
            </div> 
            <h2>País:</h2>
            <p className='text__information--p'>{DES_COUNTRY}</p> 
            <h2>Estado:</h2>
            <p className='text__information--p'>{DES_STATE}</p>
            <h2>Ciudad</h2>
            <p className='text__information--p'>{DES_CITY}</p>  
          </div>
          <p className='name__profileN'>{description}</p>
        </article>
        <section className='profileN__studies'>
          <article className='title__studies__profileN'>
            <ul className='info__studies__profileN'>
              <h2 className='info__studies__profileN--h2'>Estudios</h2>
              {DES_DATA_STUDIES.map((experience, index) => (
                <span key={index}>
                  <div className='info__institution__profileN'>
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
        <article className='nana__experience__profileN'>
            <ul className='info__experience__profileN'>
              <h2 className='info__experience__profileN--profileN'>Experiencia</h2>
              {DES_DATA_EXPERIECE.map((experience, index) => (
                <span key={index}>
                  <div className='info__profi'>
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
        <section className='skill__profileN'>
          <h2 className='skill__profileN--profileN'>Habilidades</h2>
          <ul>
            <li>
              <Tags DES_DATA_ABILITIES={DES_DATA_ABILITIES} />
            </li>
          </ul>
        </section>
        <section className='specialties__profileN'>
          <h2 className='specialties__profileN--profileN'>Especialidades</h2>
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

export default NanaDataProfile;
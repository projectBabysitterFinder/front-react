import React from 'react';
import Tags from '../Tags';
import Star from '../Star';
import { Link } from 'react-router-dom';
import { useServer } from '../Contex/Server';
import '../../sass/nanaData.scss';

const NanaData = (props) => {
  const {
    name,
    description,
    // score,
    time,
    studies,
    experiences,
    skills,
    // country,
    // state,
    // capital,
    specialty,
    averageScore,
  } = props;

  var { modalOpen } = useServer();

  return (
    <div className='nana'>
      <article className='nana__photo'>
        <img
          src={require('../../assets/images/maria-sandobal.png')}
          alt={name}
        />
        <div className='button'>
          <button onClick={modalOpen}>Contratar</button>
          <Link to='/'>
            <button>Regresar</button>
          </Link>
        </div>
      </article>
      <section className='nana__data'>
        <article className='text'>
          <div className='score'>
            <h2>Promedio de calificaciones:</h2>
            <div className='star'>
              <Star score={averageScore} name={name} />
            </div>
          </div>
          <div className='text__information'>
            <h2>Nombre:</h2>
            <p>{name}</p>
            <h2>Tiempo:</h2>
            <p>{time}</p>
            <h2>Cursos:</h2>
            <ul>
              {studies.map((study, index) => (
                <li key={index}>
                  <Tags name={study} />
                </li>
              ))}
            </ul>
            <h2>Especialidad:</h2>
            <span>
              <Tags name={specialty} />
            </span>
            <h2>Descripción:</h2>
            <p>{description}</p>
          </div>
        </article>
        <section className='nana__experience'>
          <article className='years'>
            <ul className='info'>
              <h2>Experiencia</h2>
              {experiences.map((experience, index) => (
                <span key={index}>
                  <div className='info__country'>
                    <li>{experience.year}</li>
                    <li>{experience.country}</li>
                  </div>
                  <li className='experienceI'>{experience.info}</li>
                </span>
              ))}
            </ul>
          </article>
        </section>
        <section className='skill'>
          <h2>Habilidades y Aptitudes</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <Tags name={skill} />
              </li>
            ))}
          </ul>
        </section>
        <section className='review'>
          <h2>Reseñas</h2>
          <article className='review__article'>
            <img
              className='article--img'
              src={require('../../assets/images/maria-sandobal.png')}
              alt={name}
            />
            <div className='score__review'>
              <div className='score__name'>
                <h2>{name}</h2>
                <div>
                  <Star score={averageScore} name={name} />
                </div>
              </div>
              <p className='review--description'>{description}</p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default NanaData;

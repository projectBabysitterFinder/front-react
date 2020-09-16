import React from 'react';
import StarSmall from '../StarSmall';
import Star from '../Star';
import { Link } from 'react-router-dom';
import '../../sass/nanaDataService.scss';

var services = [1, 2];

const NanaDataService = (props) => {
  const { service } = props;

  return (
    <div className='service'>
      <article className='service__photo'>
        <img
          src={require('../../assets/images/Nanas/maria-sandobal.png')}
          alt='Img'
        />
        <div className='button__service'>
          <Link to='/nana/perfil/1'>
            <button>Regresar</button>
          </Link>
        </div>
      </article>
      <section className='service__all'>
        <div className='service__card'>
          {services.map((service, index) => (
            <section key={index} className='service__data'>
              <section className='review__service'>
                <article className='review__service--article'>
                  <img
                    className='service--img'
                    src={require('../../assets/images/Nanas/maria-sandobal.png')}
                    alt={name}
                  />
                  <div className='service__review'>
                    <div className='service__name'>
                      <h2>{name}</h2>
                      <div className='star__small'>
                        <StarSmall score={averageScore} name={name} />
                      </div>
                    </div>
                  </div>
                  <div className='service__button'>
                    <button>Ver</button>
                  </div>
                </article>
              </section>
            </section>
          ))}
        </div>
        <section className='review__user'>
          <div className='service__user'>
            <h3>Reseñas</h3>
            {services.map((service, index) => (
              <section key={index} className='service__userD'>
                <section className='review__all'>
                  <article className='review__all--article'>
                    <img
                      className='user--img'
                      src={require('../../assets/images/Nanas/maria-sandobal.png')}
                      alt={name}
                    />
                    <div className='user__review'>
                      <div className='user__name'>
                        <h2>{name}</h2>
                        <div className='star__user'>
                          <Star score={averageScore} name={name} />
                        </div>
                      </div>
                      <div className='user__p'>
                        <p>Excelente nana, puntual y colaboradora</p>
                      </div>
                    </div>
                  </article>
                </section>
              </section>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default NanaDataService;

import React from 'react';
// import NanaDataService from '../../components/NanaDataService';
import Star from '../../components/Star';
import { Link } from 'react-router-dom';
import MapView from '../../components/MapView';
import ModalService from '../../components/ModalService';
import { useServer } from '../../components/Contex/Server';
import '../../sass/nanaService.scss';

// var reviewID = 0;
// var cont = 0;

const NanaService = () => {

  var { users, review, service, onlyUser, openService, openService2 } = useServer();

  // const check = (e) => {
  //   reviewID=0;
  //   cont=0;
  //   for(let i=0; i<reviews.length; i++) {
  //     if(reviews[i].ID_USER_BABYSITTER===e) {
  //       reviewID = reviewID + reviews[i].NUM_STARS;
  //       cont=cont+1;
  //     }
  //   }
  //   if (reviewID>0){
  //     return (reviewID/cont);
  //   } else {
  //     return (0);
  //   }
  // }

  const toOpen = (e) => {
    var openContratar = document.getElementById(e).value;
    openService(parseInt(openContratar));
  };

  return (
    <div className='servicee'>
      <ModalService openService2={openService2}/>
      <article className='servicee__photo'>
        <img
          src={onlyUser[0].DES_URL_IMAGE}
          alt='Img'
        /> 
        <div className='button__service'> 
          <Link to='/nana/perfil/11'>
            <button>Regresar</button>
          </Link>
        </div>
      </article>
      <section className='service__all'>
        <h3>Servicios</h3>
        <div className='service__card'>
          {service.map((servi, index) => (
          <section key={index} className='service__data'>
            <section className='review__service'>
              <article className='review__service--article'>
                {users.filter(user => user.ID === servi.ID_USER_CLIENT).map((servi, index) => (
                  <img key={index}
                    className='service--img'
                    src={servi.DES_URL_IMAGE}
                    alt='img'
                  />
                ))}
                <div className='service__review'>
                  <div className='service__name'>
                    {users.filter(user => user.ID === servi.ID_USER_CLIENT).map((servi, index) => (
                      <h2 key={index}>{servi.DES_FULLNAME}</h2>
                    ))}
                    {/* <div className='star__small'>
                      <StarSmall score={3} name='img' />
                    </div> */}
                  </div>
                </div>
                <div className='service__button'>
                  <button id={servi.ID} value={servi.ID} onClick={() => toOpen(servi.ID)}>Ver</button>
                </div>
              </article>
            </section>
          </section>
          ))}
        </div>
        <section className='map'>
          <h3>Rutas</h3>
          <div className='map__nana'>
            <MapView/>
          </div>
        </section>
        <section className='review__user'>
          <div className='service__user'>
            <h3>Reseñas</h3>
                  {review.map((rev, index) => (
                    <section key={index} className='service__userD'>
                      <section className='review__all'>
                        <article className='review__all--article'>
                          {users.filter(user => user.ID === rev.ID_USER_CLIENT).map((user, index) => (
                            <img key={index}
                              className='user--img'
                              src={user.DES_URL_IMAGE}
                              alt='img'
                          />
                          ))}
                          <div className='user__review'>
                            <div className='user__name'>
                              {users.filter(user => user.ID === rev.ID_USER_CLIENT).map((user, index) => (
                                  <h2 key={index}>{user.DES_FULLNAME}</h2>
                              ))}
                              <div className='star__user'>
                                <Star score={rev.NUM_STARS} name='img' />
                              </div>
                            </div>
                            <div className='user__p'>
                              <p>{rev.DES_OPINION}</p>
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

export default NanaService;

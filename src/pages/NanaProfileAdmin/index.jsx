import React from 'react';
import NanaDataProfile from '../../components/NanaDataProfile';
import { useServer } from '../../components/Contex/Server';
import '../../sass/nanaProfileAdmin.scss';

var reviewID = 0;
var cont = 0;

const NanaProfileAdmin = () => {
  var { nanas, reviews } = useServer();

  const check = (e) => {
    reviewID = 0;
    cont = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].ID_USER_BABYSITTER === e) {
        reviewID = reviewID + reviews[i].NUM_STARS;
        cont = cont + 1;
      }
    }
    if (reviewID > 0) {
      return reviewID / cont;
    } else {
      return 0;
    }
  };

  const idClient = parseInt(localStorage.getItem('id'));

  return (
    <div className='nanaDataProfile'>
      {nanas.length !== 0 && localStorage.getItem('id') !== null && localStorage.getItem('id') !== '' && localStorage.getItem('id') !== undefined && 
        nanas
          .filter((nana) => nana.ID === idClient)
          .map((nana, index) => (
            <div key={index}>
              <NanaDataProfile
                ID={nana.ID}
                DES_URL_IMAGE={
                  nana.DES_URL_IMAGE === null
                    ? 'http://dummyimage.com/239x191.jpg/5fa2dd/ffffff'
                    : nana.DES_URL_IMAGE
                }
                DES_FULLNAME={nana.DES_FULLNAME}
                nameButton={'Editar Perfil'}
                nameButton2={'Servicios'}
                to={`/nana/servicios/${nana.ID}`}
                NUM_STATUS={check(3)}
                DES_DATA_AVAILABILITY={nana.DES_DATA_AVAILABILITY}
                DES_DATA_ABILITIES={nana.DES_DATA_ABILITIES}
                DES_DATA_EXPERIECE={nana.DES_DATA_EXPERIECE}
                DES_DATA_STUDIES={nana.DES_DATA_STUDIES}
                DES_DATA_SERVICE_TIME={nana.DES_NAME}
                DES_DATA_SPECIALTIES={nana.DES_DATA_SPECIALTIES}
                description='Nana con plena dedicación y experiencia en cuidado diario de niños, flexible y adaptable, con conocimiento de psicología infantil. Muy responsable y fiable, con pensamietno creativo y facilidad para resolver problemas de manera independiente.'
                DES_COUNTRY={nana.DES_COUNTRY}
                DES_STATE={nana.DES_STATE}
                DES_CITY={nana.DES_CITY}
                DES_NAME={nana.DES_NAME}
              />
            </div>
          ))}
    </div>
  );
};

export default NanaProfileAdmin;

import React from 'react';
import NanaData from '../../components/NanaData';
import { useServer } from '../../components/Contex/Server';
import ModalDate from '../../components/ModalDate';
import ModalAddInfo from '../../components/ModalAddInfo';
import ModalCheck from '../../components/ModalCheck';
import ModalHalfTime from '../../components/ModalHalfTime';
import ModalNight from '../../components/ModalNight';
import ModalForHours from '../../components/ModalForHours';
import '../../sass/nanaProfile.scss';

var reviewID = 0;
var cont = 0;

const NanaProfile = () => {
  var { Idd, open, openAdd, openCheck, openHalfTime, openNight, openHours, reviews } = useServer();

  const check = (e) => {
    reviewID=0;
    cont=0;
    for(let i=0; i<reviews.length; i++) {
      if(reviews[i].ID_USER_BABYSITTER===e) {
        reviewID = reviewID + reviews[i].NUM_STARS;
        cont=cont+1;
      }
    }
    if (reviewID>0){
      return (reviewID/cont);
    } else {
      return (0);
    }
  }

  return (
    <div className='nanaData'>
      <ModalDate open={open} />
      <ModalAddInfo openAdd={openAdd} />
      {/* {users.length !== 0 &&
        <ModalCheck openCheck={openCheck} time={Idd[0].time} />
      } */}
      <ModalCheck openCheck={openCheck} time={Idd[0].DES_NAME}/>
      <ModalHalfTime openHalfTime={openHalfTime} />
      <ModalNight openNight={openNight} />
      <ModalForHours openHours={openHours}/>
      {Idd.length !== 0 && 
        <NanaData
            ID={Idd[0].ID}
            DES_URL_IMAGE={Idd[0].DES_URL_IMAGE === null ? 'http://dummyimage.com/239x191.jpg/5fa2dd/ffffff' : Idd[0].DES_URL_IMAGE}
            DES_FULLNAME={Idd[0].DES_FULLNAME}
            nameButton={'Contratar'}
            nameButton2={'Regresar'}
            to={'/nana'}
            NUM_STATUS={check(Idd[0].ID)}
            DES_DATA_AVAILABILITY={Idd[0].DES_DATA_AVAILABILITY}
            DES_DATA_ABILITIES={Idd[0].DES_DATA_ABILITIES}
            DES_DATA_EXPERIECE={Idd[0].DES_DATA_EXPERIECE}
            DES_DATA_STUDIES={Idd[0].DES_DATA_STUDIES}
            DES_DATA_SERVICE_TIME={Idd[0].DES_NAME}
            DES_DATA_SPECIALTIES={Idd[0].DES_DATA_SPECIALTIES}
            description='Nana con plena dedicación y experiencia en cuidado diario de niños, flexible y adaptable, con conocimiento de psicología infantil. Muy responsable y fiable, con pensamietno creativo y facilidad para resolver problemas de manera independiente.'
            DES_COUNTRY={Idd[0].DES_COUNTRY}
            DES_STATE={Idd[0].DES_STATE}
            DES_CITY={Idd[0].DES_CITY}
          />
          }
    </div>
  );
};

export default NanaProfile;
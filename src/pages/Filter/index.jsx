import React from 'react';
import CardNana from '../../components/CardNana';
import Country from '../../components/Country';
import State from '../../components/State';
import Capital from '../../components/Capital';
import { useServer } from '../../components/Contex/Server';
import '../../sass/filter.scss';

var reviewID = 0;
var cont = 0;

const Filter = () => {
  var { country, state, capital, nanas, reviews } = useServer();

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
    <div className='filter'>
      <div className='filter__items'>
        <Country />
        <State />
        <Capital />
      </div>
      {nanas.length === 0
        ? ''
        : country.length === 0 || country === 'DEFAULT'
        ? nanas.map((nana, index) => (
            <React.Fragment key={index}>
              <CardNana
                ID={nana.ID}
                DES_FULLNAME={nana.DES_FULLNAME}
                description='Nana con plena dedicación y experiencia en cuidado diario de niños, flexible y adaptable, con conocimiento de psicología infantil. Muy responsable y fiable, con pensamietno creativo y facilidad para resolver problemas de manera independiente.'
                NUM_STARS={check(nana.ID)}
                DES_URL_IMAGE={nana.DES_URL_IMAGE}
                DES_DATA_SPECIALTIES={nana.DES_DATA_SPECIALTIES}
                DES_DATA_SERVICE_TIME={nana.DES_NAME}
              />
            </React.Fragment>
          ))
        : state.length === 0 && capital.length === 0
        ? nanas
            .filter((nana) => nana.DES_COUNTRY === country)
            .map((nana, index) => (
              <React.Fragment key={index}>
                <CardNana
                  ID={nana.ID}
                  DES_FULLNAME={nana.DES_FULLNAME}
                  description='Nana con plena dedicación y experiencia en cuidado diario de niños, flexible y adaptable, con conocimiento de psicología infantil. Muy responsable y fiable, con pensamietno creativo y facilidad para resolver problemas de manera independiente.'
                  NUM_STARS={check(nana.ID)}
                  DES_URL_IMAGE={nana.DES_URL_IMAGE}
                  DES_DATA_SPECIALTIES={nana.DES_DATA_SPECIALTIES}
                  DES_DATA_SERVICE_TIME={nana.DES_NAME}
                />
              </React.Fragment>
            ))
        : capital.length === 0
        ? nanas
            .filter((nana) => nana.DES_COUNTRY === country && nana.DES_STATE === state)
            .map((nana, index) => (
              <React.Fragment key={index}>
                <CardNana
                  ID={nana.ID}
                  DES_FULLNAME={nana.DES_FULLNAME}
                  description='Nana con plena dedicación y experiencia en cuidado diario de niños, flexible y adaptable, con conocimiento de psicología infantil. Muy responsable y fiable, con pensamietno creativo y facilidad para resolver problemas de manera independiente.'
                  NUM_STARS={check(nana.ID)}
                  DES_URL_IMAGE={nana.DES_URL_IMAGE}
                  DES_DATA_SPECIALTIES={nana.DES_DATA_SPECIALTIES}
                  DES_DATA_SERVICE_TIME={nana.DES_NAME}
                />
              </React.Fragment>
            ))
        : nanas
            .filter(
              (nana) =>
                nana.DES_COUNTRY === country &&
                nana.DES_STATE === state &&
                nana.DES_CITY === capital
            )
            .map((nana, index) => (
              <React.Fragment key={index}>
                <CardNana
                  ID={nana.ID}
                  DES_FULLNAME={nana.DES_FULLNAME}
                  description='Nana con plena dedicación y experiencia en cuidado diario de niños, flexible y adaptable, con conocimiento de psicología infantil. Muy responsable y fiable, con pensamietno creativo y facilidad para resolver problemas de manera independiente.'
                  NUM_STARS={check(nana.ID)}
                  DES_URL_IMAGE={nana.DES_URL_IMAGE}
                  DES_DATA_SPECIALTIES={nana.DES_DATA_SPECIALTIES}
                  DES_DATA_SERVICE_TIME={nana.DES_NAME}
                />
              </React.Fragment>
            ))}
    </div>
  );
};

export default Filter;

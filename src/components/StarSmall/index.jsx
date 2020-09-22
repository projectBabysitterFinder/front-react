import React from 'react';
import '../../sass/starSmall.scss';

const StarSmall = (props) => {
  const { score, name } = props;

  return (
    <>
      {score <= 1 ? (
        <>
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')} // CDN
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
        </>
      ) : score >= 1.1 && score <= 2 ? (
        <>
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
        </>
      ) : score >= 2.1 && score <= 3 ? (
        <>
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
        </>
      ) : score >= 3.1 && score <= 4 ? (
        <>
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrellaBN.png')}
            alt={name}
          />
        </>
      ) : (
        <>
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
          <img
            className='unit'
            src={require('../../assets/images/Star/estrella.png')}
            alt={name}
          />
        </>
      )}
    </>
  );
};

export default StarSmall;

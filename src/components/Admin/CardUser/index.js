import React from 'react';
import imgUser from '../../../assets/images/usuario.png';
import '../../../sass/admin/cardUser.scss';

const index = ({ listusers }) => {
  console.log('componente lista de usuarios', listusers);

  return (
    <div className='listUsers'>
      {listusers.map((user) => {
        return (
          <div key={user.ID} className='cardUser'>
            <div className='cardUser__images'>
              <img
                src={user.DES_URL_IMAGE === null ? imgUser : user.DES_URL_IMAGE}
                alt={user.DES_FULLNAME}
              />
              {/* <img src={imgUser} alt={user.DES_FULLNAME} /> */}
            </div>
            <div className='cardUser__data'>
              <p>{user.DES_FULLNAME}</p>
              <p>{user.DES_EMAIL}</p>
            </div>
            <div className='cardUser__button'>
              <button>Editar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;

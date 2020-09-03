import React, { useContext, useState } from 'react';
import { UserContext } from '../../Contex/UserContext';

const Formulario = () => {
  const [search, saveSearch] = useState({
    user: '',
  });

  const { users } = useContext(UserContext);

  console.log('users', users);

  // función para leeer contenido
  const getUserData = (e) => {
    saveSearch({
      ...search,
    });
  };
  return (
    <form>
      <div className='titleForm'>
        <h3>Selecciones un usuarios</h3>
      </div>
      <div>
        <select className='selectUser' name='listUser' onChange={getUserData}>
          <option> -- Select User -- </option>
          {users.map((user) => (
            <option key={user.ID} value={user.DES_FULLNAME}>
              {user.DES_FULLNAME}
            </option>
          ))}
        </select>
      </div>
      <input type='submit' value='Buscar' className='inputForm' />
    </form>
  );
};

export default Formulario;

/* DATE_BIRTH AAAA/MM/DD */
import React, { useState } from 'react';
import axios from 'axios';
import '../../../sass/admin/formUser.scss';

const UserForm = () => {
  const [userData, updateUserData] = useState({
    ID: '',
    ID_ROL: '1',
    DES_FULLNAME: '',
    DATE_BIRTH: '',
    DES_URL_IMAGE: '',
    DES_USER: '',
    DES_PASSWORD: '',
    DES_ADDRESS: '',
    DES_ADDRESS_LATLONG: '',
    NUM_PHONE: '',
    DES_EMAIL: '',
    DES_COUNTRY: '',
    DES_STATE: '',
    DES_CITY: '',
    NUM_STATUS: '1',
  });

  const handleChange = (e) => {
    updateUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    console.log('evento click del boton');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://babys-api.herokuapp.com/api/users';
    try {
      const res = await axios.post(url, userData);
      console.log('Respuesta post: ', res);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <form className='formUser' onSubmit={handleSubmit}>
      <div className='formUser__div'>
        <label>Nombre</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='text'
          name='DES_FULLNAME'
        />
      </div>
      <div className='formUser__div'>
        <label>Dirección</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='text'
          name='DES_ADDRESS'
        />
      </div>
      <div className='formUser__div'>
        <label>Teléfono</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='tel'
          name='NUM_PHONE'
          maxLength='10'
        />
      </div>
      <div className='formUser__div'>
        <label>Fecha de nacimiento</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='date'
          name='DATE_BIRTH'
          maxLength='10'
        />
      </div>
      <div className='formUser__div'>
        <label>Email</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='email'
          name='DES_EMAIL'
        />
      </div>
      {/* <div className='formUser__div'>
        <label>Foto</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='file'
          name='DES_URL_IMAGE'
        />
      </div> */}
      <div className='formUser__div'>
        <label>País</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='text'
          name='DES_COUNTRY'
        />
      </div>
      <div className='formUser__div'>
        <label>Estado</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='text'
          name='DES_STATE'
        />
      </div>
      <div className='formUser__div'>
        <label>Ciudad</label>
        <input
          onChange={handleChange}
          className='inputForm'
          type='text'
          name='DES_CITY'
        />
      </div>
      <input
        onClick={handleClick}
        type='submit'
        value='Enviar'
        className='inputFormButton'
      />
    </form>
  );
};

export default UserForm;

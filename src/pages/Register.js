// El archivo se llama register y se exporta como index esto es una mala practica
import React from 'react';
import RegisterForm from '../components/Client/RegisterForm';
import '../sass/admin/listUsers.scss';

const index = () => {
  return (
    <section className='sectionList'>
      <RegisterForm />
    </section>
  );
};

export default index;

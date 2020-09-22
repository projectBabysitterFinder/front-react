// El coomponente se llama NewUser y exporta un index, usar el mismo nombre
import React from 'react';
import UserForm from '../components/Admin/UserForm';
import '../sass/admin/listUsers.scss';

const index = () => {
  return (
    <section className='sectionList'>
      <UserForm />
    </section>
  );
};

export default index;

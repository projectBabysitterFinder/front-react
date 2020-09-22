import React from 'react';
import BabysitterForm from '../components/Admin/BabysitterForm';
import '../sass/admin/listUsers.scss';

const index = () => {
  return (
    <section className='sectionList'>
      <BabysitterForm />
    </section>
  );
};

export default index;

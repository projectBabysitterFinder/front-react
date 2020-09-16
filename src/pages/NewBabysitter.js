import React from 'react';
import BabysitterForm from '../components/Admin/BabysitterForm';
/* import { ListBabysitterContext } from '../components/Contex/ListBabysitterContext'; */
import '../sass/admin/listUsers.scss';

const index = () => {
  /* const { availability } = useContext(ListBabysitterContext);
  const dataAvailability = availability.body; */
  return (
    <section className='sectionList'>
      <BabysitterForm />
    </section>
  );
};

export default index;

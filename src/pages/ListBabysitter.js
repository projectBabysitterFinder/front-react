import React, { useContext } from 'react';
import CardUser from '../components/Admin/CardUser';
import MessageError from '../components/MessageError';
import Loading from '../components/Loading';
import { ListBabysitterContext } from '../components/Contex/ListBabysitterContext';
import '../sass/admin/listUsers.scss';

const ListBabysitter = () => {
  let dataUsers = [];
  let status = 0;
  const { babysitter } = useContext(ListBabysitterContext);
  status = babysitter.status;

  switch (status) {
    case undefined:
      return <Loading />;
    case 200:
      dataUsers = babysitter.body;
      return (
        <section className='sectionList'>
          <CardUser listusers={dataUsers} />
        </section>
      );
    case 404:
      return (
        <section className='sectionList'>
          <MessageError error={babysitter} />
        </section>
      );
    default:
      return (
        <section className='sectionList'>
          <MessageError error={babysitter} />
        </section>
      );
  }
};

export default ListBabysitter;

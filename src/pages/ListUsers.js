import React, { useContext } from 'react';
import CardUser from '../components/Admin/CardUser';
import MessageError from '../components/MessageError';
import Loading from '../components/Loading';
import { ListUsersContext } from '../components/Contex/ListUsersContext';
import '../sass/admin/listUsers.scss';

const ListUsers = () => {
  let dataUsers = [];
  let status = 0;
  const { users } = useContext(ListUsersContext);
  status = users.status;

  // Logica repetida, se puede pensar nuevamente
  switch (status) {
    case undefined:
      return <Loading />;
    case 200:
      dataUsers = users.body;
      return (
        <section className='sectionList'>
          <CardUser listusers={dataUsers} />
        </section>
      );
    case 404:
      return (
        <section className='sectionList'>
          <MessageError error={users} />
        </section>
      );
    default:
      return (
        <section className='sectionList'>
          <MessageError error={users} />
        </section>
      );
  }
};

export default ListUsers;

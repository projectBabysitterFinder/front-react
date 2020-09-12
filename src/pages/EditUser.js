/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
/* import { UserContext } from '../components/Contex/UserContext'; */
import MessageError from '../components/MessageError';
import Loading from '../components/Loading';
import EditUserForm from '../components/Admin/EditUserForm';
import axios from 'axios';
import '../sass/admin/listUsers.scss';

const EditUser = (props) => {
  console.log('id de la url', props.match.params.id);
  const [userInfo, saveUser] = useState({});
  const idUser = props.match.params.id;

  useEffect(() => {
    const getUser = async () => {
      console.log('idUser context', idUser);
      if (!idUser) return;

      const url = `https://babys-api.herokuapp.com/api/users/user/${idUser}`;

      try {
        const result = await axios.get(url);
        console.log('resultado de getUser', result.data);
        saveUser(result.data);
      } catch (error) {
        console.log('entra en el catch');
        saveUser(error.response);
      }
    };
    getUser();
  }, []);

  console.log('use effect', userInfo);
  const status = userInfo.status;
  console.log('status :', status);

  switch (status) {
    case undefined:
      return <Loading />;
    case 200:
      return (
        <section className='sectionList'>
          <EditUserForm dataUser={userInfo.body[0]} />
        </section>
      );
    case 404:
      return (
        <section className='sectionList'>
          <MessageError error={userInfo} />
        </section>
      );
    default:
      return (
        <section className='sectionList'>
          <MessageError error={userInfo} />
        </section>
      );
  }
  /* return (
    <section className='sectionList'>
      <EditUserForm dataUser={userInfo} />
    </section>
  ); */
};

export default EditUser;

/* const EditUser = (props) => {
  let status = 0;
  console.log('id de la url', props.match.params.id);
  const idUserEdit = props.match.params.id;
  const { userInfo, saveIdUser } = useContext(UserContext);
  saveIdUser(idUserEdit);
  console.log('userInfo', userInfo);
  status = userInfo.status;
  console.log('contex userInfo:', status);

  switch (status) {
    case undefined:
      return <Loading />;
    case 200:
      return (
        <section className='sectionList'>
          <UserForm />
        </section>
      );
    case 404:
      return (
        <section className='sectionList'>
          <MessageError error={userInfo} />
        </section>
      );
    default:
      return (
        <section className='sectionList'>
          <MessageError error={userInfo} />
        </section>
      );
  }
};

export default EditUser; */

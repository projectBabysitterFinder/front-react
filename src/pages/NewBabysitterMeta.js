import React, { useEffect, useState } from 'react';
import BabysitterFormMeta from '../components/Admin/BabysitterFormMeta';
import MessageError from '../components/MessageError';
import Loading from '../components/Loading';
import axios from 'axios';
import '../sass/admin/listUsers.scss';

const NewBabysitterMeta = (props) => {
  const [userInfo, saveUser] = useState({});
  const emailUser = props.match.params.email;

  useEffect(() => {
    const getUser = async () => {
      if (!emailUser) return;
      const url = `https://babys-api.herokuapp.com/api/users/email/${emailUser}`; // Usar variables de entorno
      try {
        const result = await axios.get(url);
        console.log('result', result.data); // No console log
        saveUser(result.data);
      } catch (error) {
        saveUser(error.response);
      }
    };
    getUser();
  }, [emailUser]);

  const status = userInfo.status;

  switch (status) {
    case undefined:
      return <Loading />;
    case 200:
      return (
        <section className='sectionList'>
          <BabysitterFormMeta dataUser={userInfo.body[0]} />
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

export default NewBabysitterMeta;

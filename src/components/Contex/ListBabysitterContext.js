/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// Crear el context

export const ListBabysitterContext = createContext();
const userNana = 2;

// Provider es donde se encunetran las funciones y state
const UsersProvider = (props) => {
  // creare el state del context
  const [babysitter, babysitterSelect] = useState([]);
  const [availability, availabilitySelect] = useState([]);

  // ejecutar llamdo a la api
  useEffect(() => {
    const getUsers = async () => {
      const url = `https://babys-api.herokuapp.com/api/users/${userNana}`;
      try {
        const listbabysitter = await axios.get(url);
        console.log('respuesta :', listbabysitter.data);
        babysitterSelect(listbabysitter.data);
      } catch (error) {
        babysitterSelect(error.response);
      }
    };
    getUsers();
    const getAvailability = async () => {
      const url = `https://babys-api.herokuapp.com/api/availability`;
      try {
        const listavailability = await axios.get(url);
        console.log('respuesta :', listavailability.data);
        availabilitySelect(listavailability.data);
      } catch (error) {
        availabilitySelect(error.response);
      }
    };
    getAvailability();
  }, []);

  return (
    <ListBabysitterContext.Provider value={{ babysitter, availability }}>
      {props.children}
    </ListBabysitterContext.Provider>
  );
};

export default UsersProvider;

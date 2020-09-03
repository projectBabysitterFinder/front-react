/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// Crear el context

export const UserContext = createContext();
const userCliente = 1;
const userNana = 2;

// Provider es donde se encunetran las funciones y state
const UserProvider = (props) => {
  // creare el state del context
  const [users, userSelect] = useState([]);
  const [nannys, nannysSelect] = useState([]);

  // ejecutar llamdo a la api
  useEffect(() => {
    const getUsers = async () => {
      const url = `https://babys-api.herokuapp.com/api/users/${userCliente}`;
      const users = await axios.get(url);

      userSelect(users.data.body);
    };
    getUsers();
    const getNana = async () => {
      const url = `https://babys-api.herokuapp.com/api/users/${userNana}`;
      const nannys = await axios.get(url);

      nannysSelect(nannys.data.body);
    };
    getNana();
  }, []);

  return (
    <UserContext.Provider value={{ users, nannys }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

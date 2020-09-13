import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NanaProfile from '../src/pages/NanaProfile';
import Filter from '../src/pages/Filter';
import { ServerProvider } from '../src/components/Contex/Server';
import Home from './pages/Home';
import HomeRegister from './pages/HomeRegister';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/Login/PrivateRoute';
import HomeAdmin from './pages/HomeAdmin';
import ListUsers from './pages/ListUsers';
import NewUser from './pages/NewUser';
import EditUser from './pages/EditUser';
import Register from './pages/Register';
import Loading from './components/Loading';
import PerfilNana from './pages/PerfilNana';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';
/* import { ListUsersContext } from './components/Contex/ListUsersContext'; */

function App() {
  let arrayUseAuth = [];
  let dataUserAuth = [];
  let roleAuth = '';
  let emailAuth = '';
  let idUserAuth = '';
  const [loadRole, updateLoadRole] = useState(true);
  const objectUseAuth = useAuth0().user;
  const { isLoading } = useAuth0();

  const getRole = async (email) => {
    const url = `https://babys-api.herokuapp.com/api/users/email/${email}`;
    // const url = `https://babys-api.herokuapp.com/api/users/email/prueba12@gmail.com`;
    console.log('url a consultar :', url);
    try {
      const result = await axios.get(url);
      console.log('resultado de getRole :', result.data);
      console.log('resultado de getRole body :', result.data.body.length);
      dataUserAuth = result.data.body;
      console.log('dataUserAuth :', dataUserAuth.length);
      if (dataUserAuth.length === 0) {
        roleAuth = 'byregister';
      } else {
        // roleAuth = dataUserAuth[0].ID_ROL;
        dataUserAuth[0].ID_ROL === 1
          ? (roleAuth = 'client')
          : (roleAuth = 'nana');
        idUserAuth = dataUserAuth[0].ID;
      }
      console.log('roleAuth despues del get :', roleAuth);
      localStorage.setItem('role', roleAuth);
      localStorage.setItem('emailUser', emailAuth);
      localStorage.setItem('idUser', idUserAuth);
      console.log('localStorage role', localStorage.getItem('role'));
      console.log('localStorage email', localStorage.getItem('emailUser'));
      console.log('localStorage id', localStorage.getItem('idUser'));
      updateLoadRole(false);
    } catch (error) {
      console.log('entra en el catch', error);
    }
  };

  if (objectUseAuth) {
    console.log('Paso 1 autenticación');
    arrayUseAuth = Object.values(objectUseAuth);
    roleAuth = arrayUseAuth[0][0];
    emailAuth = arrayUseAuth[2];
    console.log('arrayUseAuth', arrayUseAuth);
    console.log('emailAuth :', emailAuth);
    console.log('roleAuth :', roleAuth);

    if (!roleAuth) {
      console.log('rol no esta definido');
      getRole(emailAuth);
    } else {
      localStorage.setItem('role', roleAuth);
      localStorage.setItem('emailUser', emailAuth);
      console.log('localStorage role', localStorage.getItem('role'));
      console.log('localStorage email', localStorage.getItem('emailUser'));
    }
  }

  if (isLoading) {
    console.log('isLoading', isLoading);
    return <Loading />;
  }

  if (localStorage.getItem('role') === 'admin') {
    console.log('carga admin');
    return (
      <div className='App'>
        <ToastContainer />
        <Layout>
          <Switch>
            <Route exact path='/listusers/:id/edit' component={EditUser} />
            <Route exact path='/listusers' component={ListUsers} />
            <Route exact path='/newuser' component={NewUser} />
            <Route exact path='/' component={HomeAdmin} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  } else if (localStorage.getItem('role') === 'client' && !loadRole) {
    console.log('carga cliente');
    return (
      <div className='App'>
        <ServerProvider>
          <Layout>
            <Switch>
              <PrivateRoute exact path='/nana/:id' component={NanaProfile} />
              <PrivateRoute exact path='/nana' component={Filter} />
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </ServerProvider>
      </div>
    );
  } else if (localStorage.getItem('role') === 'byregister' && !loadRole) {
    console.log('carga registro');
    return (
      <div className='App'>
        <ServerProvider>
          <Layout>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/' component={HomeRegister} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </ServerProvider>
      </div>
    );
  } else if (localStorage.getItem('role') === 'nana') {
    console.log('carga nana');
    return (
      <div className='App'>
        <ToastContainer />
        <Layout>
          <Switch>
            <Route exact path='/' component={PerfilNana} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  } else {
    console.log('carga sin loguin');
    return (
      <div className='App'>
        <ServerProvider>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </ServerProvider>
      </div>
    );
  }
}

export default App;

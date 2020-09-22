import React from 'react';
import NanaProfile from '../src/pages/NanaProfile';
import Filter from '../src/pages/Filter';
import { ServerProvider } from '../src/components/Contex/Server';
import Home from './pages/Home';
import Layout from './components/Layout';
import NanaProfileAdmin from './pages/NanaProfileAdmin';
import editNana from './pages/editNana';
import NanaService from './pages/NanaService';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/Login/PrivateRoute';
import HomeAdmin from './pages/HomeAdmin';
import ListUsers from './pages/ListUsers';
import NewUser from './pages/NewUser';
import EditUser from './pages/EditUser';
import Loading from './components/Loading';
import ListBabysitter from './pages/ListBabysitter';
import NewBabysitter from './pages/NewBabysitter';
import NewBabysitterMeta from './pages/NewBabysitterMeta';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';
// import PerfilNana from './pages/PerfilNana'; // Sin comentarios

function App() {
  let arrayUseAuth = [];
  let dataUserAuth = [];
  let roleAuth = '';
  let emailAuth = '';
  const objectUseAuth = useAuth0().user;
  const { isLoading } = useAuth0();
  const getId = async (role, email) => {
    const url = `https://babys-api.herokuapp.com/api/users/email/${email}`; // Esto puede estar en variables de entorno
    try {
      const result = await axios.get(url);
      dataUserAuth = result.data.body;
      const idRecovered = dataUserAuth[0].ID;
      localStorage.setItem('role', role); // Es necesario tener esto en localstorage?
      localStorage.setItem('emailUser', email);
      localStorage.setItem('id', idRecovered);
    } catch (error) {
      const idRecovered = '';
      localStorage.setItem('role', role);
      localStorage.setItem('emailUser', email);
      localStorage.setItem('id', idRecovered);
    }
  };

  if (objectUseAuth) {
    arrayUseAuth = Object.values(objectUseAuth);
    roleAuth = arrayUseAuth[0][0];
    emailAuth = arrayUseAuth[2];

    switch (roleAuth) {
      case undefined:
        if (emailAuth) { // No deben de tener un if dentro de un Switch
          roleAuth = 'client';
          getId(roleAuth, emailAuth);
        }
        break;
      case 'nana':
        getId(roleAuth, emailAuth);
        break;

      default:
        break;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  // Separar esta logica y validar desde props las rutas
  if (roleAuth === 'admin') {
    return (
      <div className='App'>
        <ToastContainer />
        <Layout>
          <Switch>
            <Route exact path='/listusers/:id/edit' component={EditUser} />
            <Route exact path='/listusers' component={ListUsers} />
            <Route exact path='/listbabysitters' component={ListBabysitter} />
            <Route exact path='/newuser' component={NewUser} />
            <Route exact path='/newbabysitter' component={NewBabysitter} />
            <Route
              exact
              path='/newbabysittermeta/:email/meta'
              component={NewBabysitterMeta}
            />
            <Route exact path='/' component={HomeAdmin} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  } else if (roleAuth === 'client') {
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
  } else if (roleAuth === 'nana') {
    return (
      <div className='App'>
        <ServerProvider>
          <ToastContainer />
          <Layout>
            <Switch>
              <Route exact path='/' component={NanaProfileAdmin} />
              <Route
                exact
                path='/nana/perfil/:id'
                component={NanaProfileAdmin}
              />
              <Route exact path='/editar' component={editNana} />
              <Route exact path='/servicios' component={NanaService} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </ServerProvider>
      </div>
    );
  } else if (objectUseAuth === false) {
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

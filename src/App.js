import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NanaProfile from '../src/pages/NanaProfile';
import Filter from '../src/pages/Filter';
import { ServerProvider } from '../src/components/Contex/Server';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/Login/PrivateRoute';
import HomeAdmin from './pages/HomeAdmin';
import ListUsers from './pages/ListUsers';
import NewUser from './pages/NewUser';
import EditUser from './pages/EditUser';
/* import FileImages from './pages/fileimages'; */
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';
/* import { ListUsersContext } from './components/Contex/ListUsersContext'; */

function App() {
  let arrayUseAuth = [];
  const objectUseAuth = useAuth0().user;

  if (objectUseAuth) {
    console.log('Paso 1 autenticación');
    arrayUseAuth = Object.values(objectUseAuth);
    const roleAuth = arrayUseAuth[0][0];
    const emailAuth = arrayUseAuth[2];
    console.log('emailAuth :', emailAuth);
    localStorage.setItem('role', roleAuth);
    console.log('localStorage role', roleAuth);
  }

  /* console.log('Paso 2 llamado a la api');
  let statusConetx = 0;
  const { users } = useContext(ListUsersContext);
  statusConetx = users;
  console.log('statusConetx', statusConetx); */

  if (localStorage.getItem('role') === 'admin') {
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
  } else {
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
  }
}

export default App;

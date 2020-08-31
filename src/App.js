import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NanaProfile from '../src/pages/NanaProfile';
import Filter from '../src/pages/Filter';
import { ServerProvider } from '../src/components/Contex/Server';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/Login/PrivateRoute';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  let role = [];
  const objectrole = useAuth0().user;
  if (objectrole) {
    role = Object.values(objectrole);
    const rolenuevo = role[0][0];
    localStorage.setItem('role', rolenuevo);
  }
  return (
    <div className='App'>
      <ServerProvider>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute exact path='/nana' component={Filter} />
            <PrivateRoute exact path='/nana/:id' component={NanaProfile} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ServerProvider>
    </div>
  );
}

export default App;

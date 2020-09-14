import React from 'react';
import NanaProfile from '../src/pages/NanaProfile';
import Filter from '../src/pages/Filter';
import { ServerProvider } from '../src/components/Contex/Server';
import Home from './pages/Home';
import Layout from './components/Layout';
import NanaProfileAdmin from './pages/NanaProfileAdmin';
import editNana from './pages/editNana';
import NanaService from './pages/NanaService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
    
    <ServerProvider>
    
        <Router>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/nana' component={Filter} />
              <Route exact path='/nana/:id' component={NanaProfile} />
              <Route exact path='/nana/perfil/:id' component={NanaProfileAdmin} />
              <Route exact path='/nana/editar/:id' component={editNana} />
              <Route exact path='/nana/servicios/:id' component={NanaService} />
              
            </Switch>
          </Layout>
        </Router>
      </ServerProvider>
    </div>
  );
}

export default App;

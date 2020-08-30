import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NanaProfile from '../src/pages/NanaProfile';
import Filter from '../src/pages/Filter';
import { ServerProvider } from '../src/components/Contex/Server';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

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
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </ServerProvider>
    </div>
  );
}

export default App;

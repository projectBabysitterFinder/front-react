import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
/* import './sass/app.scss'; */

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

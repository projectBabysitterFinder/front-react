import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
/* import './sass/app.scss'; */

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

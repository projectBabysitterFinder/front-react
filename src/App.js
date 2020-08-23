import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/Layout';
/* import './sass/app.scss'; */

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <h1>Hola primera seccion</h1>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

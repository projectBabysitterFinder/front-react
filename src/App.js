import React from 'react';
import Filter from '../src/pages/Filter';
import NanaProfile from '../src/pages/NanaProfile';
import { ServerProvider } from '../src/components/Contex/Server';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ServerProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/nana' component={Filter} />
          <Route exact path='/nana/:id' component={NanaProfile} />
        </Switch>
      </BrowserRouter>
    </ServerProvider>
  );
}

export default App;

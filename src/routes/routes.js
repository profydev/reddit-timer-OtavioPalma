import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact />
      <Route path="/search" />
    </Switch>
  </BrowserRouter>
);

export default Routes;

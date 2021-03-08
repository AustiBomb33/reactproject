import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Data from '../pages/Data';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/About" component={ About }/>
      <Route exact path="/Products" component={ Data }/>
    </Switch>
  );
}
 
export default Routes;
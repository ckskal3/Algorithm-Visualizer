import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import SortView from '../Component/Sort/SortView';
import HSort from '../Component/Sort/HeapSort';

function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/BSort" component={SortView} />
        <Route path="/ISort" component={SortView} />
        <Route path="/SSort" component={SortView} />
        <Route path="/HSort" component={HSort} />
      </Switch>
    </Router>
  );
}
export default Routes;

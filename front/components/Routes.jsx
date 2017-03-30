import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {App, Login} from './index';
import PlayerViewContainer from '../containers/PlayerViewContainer.jsx';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={PlayerViewContainer} />
      <Route path='/login' component={Login} />
    </Route>
  </Router>
);

export default Routes;

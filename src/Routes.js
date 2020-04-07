
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Market from './components/Market';
import Main from './components/Main';
import Requests from './components/Requests';
import New_request from './components/New_request';

const Routes = (
 <Router>
   <div>
      <Route exact path="/" component={ Market } />
      <Route exact path="/main" component={ Main } />
      <Route exact path="/requests" component={ Requests } />
    </div>
  </Router>
)


export default Routes;
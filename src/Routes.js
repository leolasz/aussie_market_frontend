
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Market from './components/Market';
import Main from './components/Main';
import Requests from './components/Requests';
import Branches from './components/Branches';
import Products from './components/Products';
import editRequest from './components/editRequest';

import newRequest from './components/newRequest';

import AddRequest from './components/AddRequest';



const Routes = (
 <Router>
   <div>
      <Route exact path="/" component={ Market } />
      <Route exact path="/main" component={ Main } />
      <Route exact path="/requests" component={ Requests } />
      <Route exact path="/branches" component={ Branches } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/editRequest" component={ editRequest } />
      <Route exact path="/newRequest" component={ newRequest } />


    </div>
  </Router>
)


export default Routes;

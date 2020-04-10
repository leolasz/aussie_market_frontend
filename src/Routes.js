
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import Main from './components/Main';
import Requests from './components/Requests';
import Branches from './components/Branches';
import Products from './components/Products';
import editRequest from './components/editRequest';
import newRequest from './components/newRequest';
import newBranch from './components/newBranch';
import newProducts from './components/newProducts';





const Routes = (
 <Router>
   <div>
      <Route exact path="/" component={ Login } />
      <Route exact path="/registration" component={ Registration } />
      <Route exact path="/main" component={ Main } />
      <Route exact path="/requests" component={ Requests } />
      <Route exact path="/branches" component={ Branches } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/editRequest" component={ editRequest } />
      <Route exact path="/newRequest" component={ newRequest } />
      <Route exact path="/newBranch" component={ newBranch } />
      <Route exact path="/newProducts" component={ newProducts } />



    </div>
  </Router>
)


export default Routes;

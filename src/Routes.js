
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Market from './components/Market';
import Main from './components/Main';
import Requests from './components/Requests';
import Branches from './components/Branches';
import Products from './components/Products';
import AddProducts from './components/AddProduct';
import editRequest from './components/editRequest';
const Routes = (
 <Router>
   <div>
      <Route exact path="/" component={ Market } />
      <Route exact path="/main" component={ Main } />
      <Route exact path="/requests" component={ Requests } />
      <Route exact path="/branches" component={ Branches } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/addproducts" component={ AddProducts } />
      <Route exact path="/editRequest" component={ editRequest } />

    </div>
  </Router>
)


export default Routes;

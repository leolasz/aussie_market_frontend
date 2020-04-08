
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Market from './components/Market';
import Main from './components/Main';
import RequestForm from './components/RequestForm';
import All_requests from './components/All_requests';
import Branches from './components/Branches';
import All_Branches from './components/All_branches';


const Routes = (
 <Router>
   <div>
      <Route exact path="/" component={ Market } />
      <Route exact path="/main" component={ Main } />
      <Route exact path="/requestform" component={ RequestForm } />
      <Route exact path="/all_requests" component={ All_requests } />
      <Route exact path="/branches" component={ Branches } />
      <Route exact path="/all_branches" component={ All_Branches } />
      
     
    </div>
  </Router>
)


export default Routes;

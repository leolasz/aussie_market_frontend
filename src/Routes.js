
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Market from './components/Market';
import Test from './components/Test';​

const Routes = (
 <Router>
   <div>
      <Route exact path="/" component={ Market } />
      <Route exact path="/test" component={ Test } />
    </div>
  </Router>
)
​export default Routes;
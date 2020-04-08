
import React from 'react';
import Market from './Market';
import Main   from './Main';
import Requests from './Requests';
import Products from './Products';
import { Link } from 'react-router-dom';
import newRequest from './newRequest';
import newBranch from './newBranch';
import newProducts from './newProducts';

function App() {
  return (
    <div className="App">
        <Market />
        <Requests />
        <Products />
        <newRequest />
        <newBranch />
        <newProducts />
    
        
       
    </div>
  );
}

export default App;


import React from 'react';
import Market from './Market';
import Main   from './Main';
import Requests from './Requests';
import Products from './Products';
import AddRequest from './AddRequest';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Market />
        <Requests />
        <Products />
        <AddRequest />
        
       
    </div>
  );
}

export default App;

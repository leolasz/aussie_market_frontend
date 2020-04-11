
import React from 'react';
import Login from './auth/Login';
import Registration from './auth/Registration';
import Main   from './Main';
import Requests from './Requests';
import Products from './Products';
import { Link } from 'react-router-dom';
import newRequest from './newRequest';
import newBranch from './newBranch';
import newProducts from './newProducts';
import AddRequest from './AddRequest';

function App() {
  return (
    <div className="App">
        <Login />
        <Registration />
        <Main />
        <Requests />
        <Products />
        <newRequest />
        <newBranch />
        <newProducts />
        <AddRequest />
    </div>
  );
}

export default App;

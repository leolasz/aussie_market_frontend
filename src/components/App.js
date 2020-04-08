
import React from 'react';
import Market from './Market';
import Main   from './Main';
import New_request from './New_request';
import Requests from './Requests';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Market />
        <Requests />
    </div>
  );
}

export default App;

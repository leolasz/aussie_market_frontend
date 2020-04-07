
import React from 'react';
import Market from './Market';
import Branches from './Branches'
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Market />
        <Link to="/branches"></Link>
    </div>
  );        
}

export default App;


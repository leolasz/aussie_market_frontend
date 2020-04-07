
import React from 'react';
import Market from './Market';
import Main   from './Main';
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


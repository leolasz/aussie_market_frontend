import React, { Component } from 'react';
import { Link } from 'react-router-dom';



    class Main extends Component{
    render(){
         return(
      <div>
        <h1>Welcome to Aussie Market Manager</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
    
   <li><button><Link to={"/requestform"} >  New Requests </Link></button></li>  
   <li><button><Link to={"/requests"} > All Requests </Link></button></li>    
   <li><button><Link to={"/branches"} > All Branches </Link></button></li> 
   <li><button><Link to={"/products"} > All Products </Link></button></li> 
   <li><button><Link to={"/addproducts"} > Add Products </Link></button></li>
   </ul>
   </nav>




 

      </div>
    );
  }
}


export default Main;
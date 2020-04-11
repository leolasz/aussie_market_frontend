import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import '../css/Main.css';


class Main extends Component{

  render(){
    return(
      <div>
        <Jumbotron fluid>

    <h1>Welcome to Aussie Market </h1>
    <p>
    This platform is intended for internal control.
    </p>
    <>
   
  <Button variant="secondary"><Link to={"/newProducts"} >New Products </Link></Button>{' '}
  <Button variant="success"><Link to={"/newBranch"} >New Branch </Link></Button>{' '}
  <Button variant="warning"><Link to={"/newRequest"} >New Request </Link></Button>{' '}
  <Button variant="danger"><Link to={"/requests"} > All Requests </Link></Button> 
  <Button variant="info"><Link to={"/products"} > All Products </Link></Button>{' '}
  <Button variant="light"><Link to={"/branches"} > All Branches </Link></Button> 
</>
</Jumbotron>
      </div>
    );
  }
}


export default Main;

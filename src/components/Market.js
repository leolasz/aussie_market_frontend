import React, { Component } from 'react';
import axios from 'axios';


const SERVER_URL_login = 'http://localhost:3000/users.json';


class Market extends Component {
  constructor(){
  super();
  this.state = {
        username: '',
        password: '',

    };

// Let's poll for Search from the DB via ajax
//   const fetchresult = () => {
//     axios.post(SERVER_URL_login).then((results) => {
//     this.setState({searchdata: results.data});
//     // setTimeout(fetchresult, 4000); // recursion
//
//   });
// }

  this._handleChange = this._handleChange.bind(this);
  this._handleSubmit = this._handleSubmit.bind(this);
  }

  // Event listener for text change
  _handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  // Event listener
  _handleSubmit(event) {
    event.preventDefault(); // Stay here and handle the submission with JS.

    axios.get(`${SERVER_URL_login}?email=${this.state.username}&password=${this.state.password}`).then((results) => {
      console.log(results.data.id);
    })
  }

  render(){
    return(
      <div>
        <h3>Login</h3>
          <form>
            <label>Username</label>
            <input type="text" name="username" onChange={ this._handleChange }/> <br/>
            <label>Password</label>
            <input type="text" name="password" onChange={ this._handleChange }/> <br/><br/>
            <input type="submit" value="Submit" onClick={ this._handleSubmit }/>
          </form>
      </div>
    );
  }
}

export default Market;

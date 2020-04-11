import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const SERVER_URL_login = 'http://localhost:3000/login';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };
    this.props.history.push('/main')
    axios.post(SERVER_URL_login , { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
    //   .catch(error => {
    //     console.log("login error", error);
    //   });
    // event.preventDefault();
 

  render() {
    return (
      <div>
      <br></br> <br></br><br></br> <br></br>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required 
            
          />
          
<br></br> <br></br>  
<Button type="submit">Login</Button>
        </form>
      </div>
    );
  }
}


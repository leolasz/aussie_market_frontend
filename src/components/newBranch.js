import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';




const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches/create';
const SERVER_URL_products = 'http://localhost:3000/products';

class newBranch extends Component {

    constructor(){
      super();
      this.state = {
       branch_name: "",
       location:"",
       email:"",
       contact:""
      };

    

  
          this._handleChange = this._handleChange.bind(this);
          this._handleSave = this._handleSave.bind(this);
        }
    
        _handleChange(event) {
          this.setState({ [event.target.name]: event.target.value });
        }
        // Event listener
        _handleSave(event) {
          event.preventDefault(); // Stay here and handle the submission with JS.
          var branch = {
            branch_name:this.state.branch_name,
            location:this.state.location,
            email:this.state.email,
            contact:this.state.contact,

            
          
          };
      
          this.props.history.push('/main')
          axios.post(SERVER_URL_branches, branch).then((results) => {});
    
        }
    
    
        render() {
          return (
            <div>
              <h3>New Branch</h3>
      
              <form refs="branchForm" onSubmit={this._handleSave}>
              <label>Branch Name:</label>
                <input type="text" name="branch_name" onChange={this._handleChange} />
                <br />
                <label>Location:</label>
                <input type="text" name="location" onChange={this._handleChange} />
                <br />
                <label>Email:</label>
                <input type="text" name="email" onChange={this._handleChange} />
                <br />
  
                <label>Contact:</label>
                <input
                  name="contact"
                  type="text"
                  value={this.state.contact}
                onChange={this._handleChange}
                
                />
               
              <br />
              <Button variant="primary"><button type="submit">Done</button></Button>{' '}
          <Button variant="danger"><Link to={'/main'} >Back </Link></Button>{' '}
   
           
              </form>
             <br></br>
              
            </div>
              
      
          
          );
        }
      }
    export default newBranch;
    
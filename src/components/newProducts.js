import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../css/newProducts.css';


const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches';
const SERVER_URL_products = 'http://localhost:3000/products/create';

class newProducts extends Component {

    constructor(){
      super();
      this.state = {
        item: "",
         price: 0,
        image: ""
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
      var product = {
        
        item: this.state.item,
        price: this.state.price,
        image: this.state.image,
      
      };
  
      this.props.history.push('/main')
      axios.post(SERVER_URL_products, product).then((results) => {});

    }


    render() {
      return (
        <div>
          <h3>New Products</h3>
  
          <form refs="productsForm" onSubmit={this._handleSave}>
          <label>Item:</label>
            <input type="text" name="item" onChange={this._handleChange} />
            <br />
            <label>Price:</label>
            <input type="number" name="price" value={this.state.price} onChange={this._handleChange} />
            <br />
            <label>image:</label>
            <input
              name="image"
              type="text"
              value={this.state.image}
            onChange={this._handleChange}
            
            />
           
          <br />
          <Button type="submit">Done</Button>
          <br></br><br></br>
         
          <Button ><Link to={'/main'} >Back Home Page </Link></Button>
          </form>
          <br></br>
         
 
         
        </div>
          
  
      
      );
    }
  }
export default newProducts;

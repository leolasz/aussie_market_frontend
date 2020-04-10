import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const SERVER_URL_products = 'http://localhost:3000/products.json';
    
class Products extends Component {

  constructor(){
    super();
    this.state = {
      prod: []
    };

    console.log("array:",this.state.prod);

    const fetchresult = () => {
        axios.get(SERVER_URL_products).then((results) => {
          console.log(results.data);
          this.setState({prod: results.data});
        })
    }

    fetchresult();

        this.deleteProd = this.deleteProd.bind(this);

  }

  deleteProd = (index) => {
      const prod = Object.assign([],this.state.prod);
      prod.splice(index,1);
      this.setState({prod:prod});
    }

  render(){
    return(
      <div>
        <h3>All Products</h3>
        <table>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                
                
              </tr>

              {this.state.prod.map(prod => (
                <tr key={prod.id}>
                  <td>{prod.item}</td>
                  <td>{prod.price}</td>
                  <td>{prod.quantity}</td>
                 
                
                  
                 
                  <td>
                    <button type="button">Edit</button>
                    &nbsp;<button type="button" onClick={this.deleteProd.bind(prod.id)}>Delete</button>
                  </td>
                </tr>
              ))}

          </table>
          <button><Link to={'/main'} >Back </Link></button>
      </div>
      
    )
  }

}

export default Products;

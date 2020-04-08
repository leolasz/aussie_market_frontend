import React, {Component} from 'react';
import axios from 'axios';

const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches';
const SERVER_URL_products = 'http://localhost:3000/products';

class newProducts extends Component {

    constructor(){
      super();
      this.state = {
        b: [],
        p: [],
        np: [],
        total_price: 0,
        current_date : new Date()
      };

      const fetchresult = () => {

          axios.get(SERVER_URL_products).then((results) => {
            this.setState({b: results.data});
          })
          

      }

      fetchresult();
      console.log(this.state.b,this.state.p,this.state.np);

      this._handleSave = this._handleSave.bind(this);
    }

    // Event listener
    _handleSave(event) {
      event.preventDefault(); // Stay here and handle the submission with JS.

      axios.post(SERVER_URL_requests).then((results) => {
        this.setState({np: results.data});
      })
    }


  render(){
    return(
      <div>
      <h3>New Products</h3>
      <form>
      
   
      <label>Item:</label><input type="text" value={this.state.np} /><br/>
      <label>price:</label><input type="float" /><br/>
      <label>image:</label><input type="text" value={this.state.np} /><br/>

      <input type="submit" value="Save" onClick={ this._handleSave }/>
      </form>
      </div>
    )
  }

}
export default newProducts;

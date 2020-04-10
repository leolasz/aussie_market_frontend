import React, {Component} from 'react';
import axios from 'axios';

const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches';
const SERVER_URL_products = 'http://localhost:3000/products';

class editRequest extends Component {

    constructor(props){
      super(props);
      this.state = {
        requestList: [],
        branchList: [],
        productList: [],
        reqs: [],
        total_price: 0,
        current_date : new Date()
      };
      console.log(props);
      const fetchresult = () => {

          axios.get(SERVER_URL_requests).then((results) => {
            this.setState({requestList: results.data});
          })

          axios.get(SERVER_URL_branches).then((results) => {
            this.setState({branchList: results.data});
          })
          axios.get(SERVER_URL_products).then((results) => {
            this.setState({productList: results.data});
          })

      }

      fetchresult();
      console.log(this.state.b,this.state.p,this.state.reqs);

      this._handleSave = this._handleSave.bind(this);
    }

    // Event listener
    _handleSave(event) {
      event.preventDefault(); // Stay here and handle the submission with JS.

      axios.post(`${SERVER_URL_requests}/new/`).then((results) => {
        this.setState({reqs: results.data});
      })
    }


  render(){
    return(
      <div>
      <h3>Edit Request</h3>
      <form>
      <label>Branch:</label><select id="selectBranches">
      {this.state.b.map((branch,key) => (
          <option>{branch.branch_name}</option>
      ))}
      </select> <br/>
      <label>Product:</label><select id="selectProduct">
      {this.state.p.map((product,key) => (
          <option>{product.item}</option>
      ))}
      </select> <br/>
      <label>Quantity:</label><input type="number" /><br/>
      <label>Status:</label><input type="text" value="OPEN" readOnly="true" /><br/>
      <label>Created on:</label><input type="date" value={this.state.current_date} readOnly="true" /><br/>
      <input type="submit" value="Save" onClick={ this._handleSave }/>
      </form>
      </div>
    )
  }

}
export default editRequest;

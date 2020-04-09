import React, {Component} from 'react';
import axios from 'axios';

const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches';
const SERVER_URL_products = 'http://localhost:3000/products';

class newRequest extends Component {

    constructor(props){
      super(props);
      this.state = {
        b: [],
        p: [],
        reqs: [],
        total_price: 0,
        current_date : new Date(),
        one_p: [],
        one_b: []
      };

      this.initialState = {
           id : '',
           branch_id: 0,
           product_id: 0,
           quantity: 0,
           price: 100,
           status: 'OPEN',
           created_at: ''
         }

      const fetchresult = () => {

          axios.get(SERVER_URL_branches).then((results) => {
            this.setState({b: results.data});
          })
          axios.get(SERVER_URL_products).then((results) => {
            this.setState({p: results.data});
          })

      }

      fetchresult();
      console.log(this.state.b,this.state.p,this.state.reqs);

      this._handleChange = this._handleChange.bind(this);

      this._handleSave = this._handleSave.bind(this);
    }

    _handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
    // this.setState({
    //   one_p: p.filter(one_p => one_p.product_id !== this.state.product_id)
    //   this.state.price: ${one_p.price * this.state.quantity}
    // })

    }


    // Event listener
    _handleSave(event) {
      event.preventDefault(); // Stay here and handle the submission with JS.

      axios.post(SERVER_URL_requests).then((results) => {
        this.setState({reqs: results.data});
      })
    }


  render(){
    console.log(this.state.id);
    let pageTitle;
    if(this.state.id) {
      pageTitle = <h2>Edit Request</h2>
    } else {
      pageTitle = <h2>Add Request</h2>
    }


    return(
      <div>
      <h3>{pageTitle}</h3>
      <form onSubmit={this._handleSave}>
      <label>Branch:</label><select id="selectBranches" value={this.state.branch_id}
      onChange={this._handleChange}>
      {this.state.b.map((branch,key) => (
          <option>{branch.branch_name}</option>
      ))}
      </select> <br/>
      <label>Product:</label><select id="selectProduct" value={this.state.product_id}
      onChange={this._handleChange}>
      {this.state.p.map((product,key) => (
          <option>{product.item}</option>
      ))}
      </select> <br/>
      <label>Quantity:</label><input type="number" value={this.state.quantity} onChange={this._handleChange}/><br/>
      <label>Price:</label><input type="number" value={this.state.price} readOnly="true" /><br/>
      <label>Status:</label><input type="text" value={this.state.status} readOnly="true" /><br/>
      <label>Created on:</label><input type="date" value={this.state.current_date} onChange={this._handleChange}/><br/>
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }

}
export default newRequest;

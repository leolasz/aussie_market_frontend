import React, { Component } from "react";
import axios from "axios";

const SERVER_URL_requests = "http://localhost:3000/requests/create";
const SERVER_URL_branches = "http://localhost:3000/branches";
const SERVER_URL_products = "http://localhost:3000/products";

class newRequest extends Component {
  constructor() {
    super();
    this.state = {
      branchList: [],
      productList: [],
      request : {
            branch_id: 0,
            product_id: 0,
            quantity: 0,
            price: 0,
            status: '',
            created_at: '' }

    };

    const fetchresult = () => {
      //Branches
      axios
        .get(SERVER_URL_branches)
        .then((response) => {
          this.setState({
            branchList: response.data,
            value: "",
            display: "(Select your branch)",
          });
        })


      //Products
      axios
        .get(SERVER_URL_products)
        .then((response) => {
          this.setState({
            productList: response.data,
            value: "",
            display: "(Select your Product)",
          });
        })

    };

    fetchresult();
    this._handleChange = this._handleChange.bind(this);
    this._handleSave = this._handleSave.bind(this);
  }

  _handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  // Event listener
  _handleSave(event) {
    event.preventDefault(); // Stay here and handle the submission with JS.

    axios.post(SERVER_URL_requests,this.state.request).then((results) => {
      this.setState({ req: results.data });
    })
  }

  render() {
    return (
      <div>
        <h3>New Request</h3>

        <form onSubmit={this._handleSave}>
          <label>Branch:</label>
          <select onChange={this._handleChange}>
            {this.state.branchList.map((branch) => (
              <option key={this.state.request.branch_id} value={branch.branch_id} >
                {branch.branch_name}
              </option>
            ))}
          </select>

          <br />
          <label>Product:</label>
          <select onChange={ this._handleChange }>
            {this.state.productList.map((product) => (
              <option key={this.state.request.id} value={product.id}>
                {product.item}
              </option>
            ))}
          </select>
          <br />

          <label>Quantity:</label>
          <input
            type="number"
            onChange={this._handleChange}
          />
          <br />
          <label>Price:</label>
          <input type="number" />
          <br />
          <label>Status:</label>
          <input type="text" value="OPEN" readOnly="true" />
          <br />
          <label>Request Created Today</label>
          <input
            type="date"
            value={this.state.current_date}
            onChange={this._handleChange}
          />
          <br />
          <button type="submit" >Save</button>
        </form>
      </div>
    );
  }
}
export default newRequest;

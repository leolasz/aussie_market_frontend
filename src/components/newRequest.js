import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../css/newRequest.css";

const SERVER_URL_requests = "http://localhost:3000/requests/create";
const SERVER_URL_branches = "http://localhost:3000/branches";
const SERVER_URL_products = "http://localhost:3000/products";

class newRequest extends Component {
  constructor() {
    super();
    this.state = {
      branchList: [],
      productList: [],
      branch_id: 0,
      product_id: 0,
      quantity: 0,
      price: 0,
      status: "OPEN",
      created_at: "",
    };

    const fetchresult = () => {
      //Branches
      axios.get(SERVER_URL_branches).then((response) => {
        this.setState({
          branchList: response.data,
          value: "",
          display: "(Select your branch)",
        });
      });

      axios.get(SERVER_URL_products).then((response) => {
        this.setState({
          productList: response.data,
          value: "",
          display: "(Select your Product)",
        });
      });
    };

    fetchresult();
    this._handleChange = this._handleChange.bind(this);
    this._handleSave = this._handleSave.bind(this);
  }

  _handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Event listener
  _handleSave(event) {
    event.preventDefault(); // Stay here and handle the submission with JS.
    // Request created on current Date
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    var request = {
      branch_id: this.state.branch_id,
      product_id: this.state.product_id,
      quantity: this.state.quantity,
      status: this.state.status,
      price: this.state.price,
      created_at: dateTime
    };
    this.props.history.push("/main");
    axios.post(SERVER_URL_requests, request).then((results) => {});
  }

  render() {
    return (
      <div>
      <Button variant="danger">
        <Link to={"/main"}>Home</Link>
      </Button>
        <h3>New Request</h3>
        <form refs="requestsForm" onSubmit={this._handleSave}>
          <label>Branch:</label><br/>
          <select name="branch_id" onChange={this._handleChange}>
            {this.state.branchList.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.branch_name}
              </option>
            ))}
          </select>
          <br />
          <label>Product:</label><br/>
          <select name="product_id" onChange={this._handleChange}>
            {this.state.productList.map((product) => (
              <option key={product.id} value={product.id}>
                {product.item}
              </option>
            ))}
          </select>
          <br/>
          <label>Quantity:</label>
          <input type="number" name="quantity" onChange={this._handleChange} />
          <label>Price:</label>
          <input type="number" name="price" onChange={this._handleChange} />
          <label>Status:</label>
          <input
            name="status"
            type="text"
            value="OPEN"
            readOnly={true}
            // onChange={this._handleChange}
          />
          <br />
          <button type="submit">Done</button>
        </form>
      </div>
    );
  }
}
export default newRequest;

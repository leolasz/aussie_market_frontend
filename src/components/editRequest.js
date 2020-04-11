import React, {Component} from 'react';
import axios from 'axios';

const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches';
const SERVER_URL_products = 'http://localhost:3000/products';

var formData = {
  requestList : [],
  branchList : [],
  productList : [],
  reqs : [],
  total_price :  0,
  current_date : new Date()
};

const fetchresult = () => {
    axios.get(SERVER_URL_requests).then((results) => {
      this.setState({requestList : results.data});
    })
    axios.get(SERVER_URL_branches).then((results) => {
      this.setState({branchList : results.data});
    })
    axios.get(SERVER_URL_products).then((results) => {
      this.setState({productList : results.data});
    })
}

const onEditFormSubmitHandler = (event) => {
  debugger;
  // let id = 0;
  // event.preventDefault(); // Stay here and handle the submission with JS.
  // axios.post(`${SERVER_URL_requests}/${id}/update`).then((results) => {
  //   this.setState.reqs = results.data};
  // })
}

const onEditFormChangeHandler = (event) => {
  //debugger;
   let name = event.target.name;
   let val = event.target.value;
   this.setState({[name]: val});
 }

export const EditRequest = (props) => {
  fetchresult();
  debugger;
  // Object.keys(props.editData).map(function(key) {
  //   this.setState({key : items[key]});

  return (
          <div>
          <h3>Edit Request</h3>
          <form>
            <label>Branch:</label>
            <select
              name="selectBranches"
              value={this.state.branch_id}
              onChange={onEditFormChangeHandler}>
              {
                this.state.branchList.map((branch,key) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.branch_name}
                  </option>
                ))
              }
            </select>
            <br/>
            <label>Product:</label>
            <select
              name="selectProduct"
              value={this.state.product_id}
              onChange={onEditFormChangeHandler}>
              {
                this.state.productList.map((product,key) => (
                  <option key={product.id} value={product.id}>
                    {product.item}
                  </option>
                ))
              }
            </select>
            <br/>
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={onEditFormChangeHandler}
            />
            <br/>
            <input
              type="hidden"
              name="id"
              value={this.state.id}
            />
            <br/>
            <input
              type="submit"
              value="Save"
              onClick={onEditFormSubmitHandler}
            />
          </form>
          </div>
        )
};
export default EditRequest;

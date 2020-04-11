import React, {Component} from 'react';
import axios from 'axios';

const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches';
const SERVER_URL_products = 'http://localhost:3000/products';

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

const EditRequest = (props) => {
  return(
     // Using Props handleClick as callback function
           <div onClick={()=> props.handleClick(props.editData)}>
                 <p> {props.editData.branch_id} </p>
                 <p> {props.editData.product_id} </p>
                 <p> {props.editData.quantity} </p>
                 <p> {props.editData.status} </p>
                 <p> {props.editData.price} </p>
                 <p> {props.editData.created_at} </p>
            </div>

            //
            //
            // fetchresult();
            // this._onEditFormSubmitHandler = this._onEditFormSubmitHandler.bind(this);
            // this._onEditFormChangeHandler = this._onEditFormChangeHandler.bind(this);
            // }
            //
            // _onEditFormSubmitHandler = (event) => {
            //   debugger;
            //   let id ;
            //   event.preventDefault(); // Stay here and handle the submission with JS.
            //   axios.post(`${SERVER_URL_requests}/${id}/update`).then((results) => {
            //     this.setState.reqs = results.data;
            //   })
            // };
            //
            // _onEditFormChangeHandler = (event) => {
            // this.setState({ [event.target.name]: event.target.value });
            //  }
            //
            // // const EditRequest = (props) => {
            // //   var items = props.editData;
            // //   fetchresult();
            // //   Object.keys(items).map(function(key) {
            // //     this.setState({key : items[key]});
            // //   })
            // // }
            //
            // render(){
            //   return (
            //
            // console.log(this.props);
            //           // <div>
            //           // <h3>Edit Request</h3>
            //           // <form>
            //           //   <label>Branch:</label>
            //           //   <select
            //           //     name="selectBranches"
            //           //     value={branch_id}
            //           //     onChange={this._onEditFormChangeHandler}>
            //           //     {
            //           //       this.props.branchList.map((branch,key) => (
            //           //         <option key={branch.id} value={branch.id}>
            //           //           {branch.branch_name}
            //           //         </option>
            //           //       ))
            //           //     }
            //           //   </select>
            //           //   <br/>
            //           //   <label>Product:</label>
            //           //   <select
            //           //     name="selectProduct"
            //           //     value={this.props.product_id}
            //           //     onChange={this._onEditFormChangeHandler}>
            //           //     {
            //           //       this.props.productList.map((product,key) => (
            //           //         <option key={product.id} value={product.id}>
            //           //           {product.item}
            //           //         </option>
            //           //       ))
            //           //     }
            //           //   </select>
            //           //   <br/>
            //           //   <label>Quantity:</label>
            //           //   <input
            //           //     type="number"
            //           //     name="quantity"
            //           //     value={this.props.quantity}
            //           //     onChange={this._onEditFormChangeHandler}
            //           //   />
            //           //   <br/>
            //           //   <input
            //           //     type="hidden"
            //           //     name="id"
            //           //     value={this.props.id}
            //           //   />
            //           //   <br/>
            //           //   <input
            //           //     type="submit"
            //           //     value="Save"
            //           //     onClick={this._onEditFormSubmitHandler}
            //           //   />
            //           // </form>
            //           // </div>
            //         )
            //       }
            //


  );
 }


export default EditRequest;

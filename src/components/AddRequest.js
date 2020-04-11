import React, {Component} from 'react';
import axios from 'axios';
import {Form, FormGroup, FormControl, Row, Col, Button, ButtonToolbar, Table} from "react-bootstrap";

const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches';
const SERVER_URL_products = 'http://localhost:3000/products';

class AddRequest extends React.Component {
  constructor(props) {
    super(props);
    var requestList = [],
      branchList = [],
      productList = [];

    this.initialState = {
      id : 0,
      branch_id : 0,
      product_id : 0,
      quantity : 0,
      price : 0,
      status : 'OPEN',
      created_at : new Date()
    };
    // if(props.request){
    //  this.state = props.request;
    // } else {
      this.state = {
        id : 0,
        branch_id : 0,
        product_id : 0,
        quantity : 0,
        price : 0,
        status : 'OPEN',
        created_at : new Date()
      };
    //}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {


    axios.get(SERVER_URL_requests).then((results) => {
      this.requestList = results.data;
    })
    axios.get(SERVER_URL_branches).then((results) => {
      this.branchList = results.data;
    })
    axios.get(SERVER_URL_products).then((results) => {
      this.productList = results.data;
    })
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    //this.setState({name: value});
    this.setState({price: 50});
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.setState({[event.target.name]: event.target.value});
    // if(event.target. == "id"){
      var id = this.state.id;
      var params = this.state;
      axios.post(`${SERVER_URL_requests}/${id}/update`, params).then((results) => {
      });
    // };
    this.setState({[event.target.name]: event.target.value});
    this.setState(this.initialState);
  }
  render() {
    this.state = this.props.request;
    let pageTitle;
    if(this.state.id) {
      pageTitle = <h2>Edit Product</h2>
    } else {
      pageTitle = <h2>Add Product</h2>
    }
    return(
     <div>
       {pageTitle}
       <Row>
         <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="branch_id">
                <Form.Label column md="2" >Branch</Form.Label>
                <Form.Control
                    type="number"
                    name="branch_id"
                    value={this.state.branch_id}
                    onChange={this.handleChange}
                    placeholder="Branch"/>
            </Form.Group>
            <Form.Group controlId="product_id">
                <Form.Label column md="2">Product</Form.Label>
                <Form.Control
                    type="number"
                    name="product_id"
                    value={this.state.product_id}
                    onChange={this.handleChange}
                    placeholder="Product"/>
           </Form.Group>
           <Form.Group controlId="quantity">
                <Form.Label column md="2" >Quantity</Form.Label>
                <Form.Control
                    type="number"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    placeholder="Quantity"/>
           </Form.Group>
           <Form.Group controlId="price">
                <Form.Label column md="2" >Price</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    placeholder="Price"/>
            </Form.Group>
            <Form.Group controlId="status">
                 <Form.Label column md="2" >Status</Form.Label>
                 <Form.Control
                    type="text"
                    name="status"
                    value={this.state.status}
                    onChange={this.handleChange}
                    placeholder="Status"/>
             </Form.Group>
             <Form.Group controlId="id">
                 <Form.Control
                    type="hidden"
                    name="id"
                    value={this.state.id} />
              </Form.Group>
              <Form.Group controlId="created_at">
                <Form.Control
                     type="hidden"
                     name="created_at"
                     value={this.state.created_at} />
                </Form.Group>
                <Form.Group>
               <Button variant="success" type="submit">Save</Button>
             </Form.Group>
           </Form>
         </Col>
      </Row>
     </div>
   )
  }
}
export default AddRequest;

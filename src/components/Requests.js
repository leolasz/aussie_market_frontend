import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import { Table, Button } from 'react-bootstrap';
import './Requests.css';
import AddRequest from './AddRequest';
import {Form, FormGroup, FormControl, Row, Col, Modal, Button, ButtonToolbar, Table} from "react-bootstrap";

const SERVER_URL_requests = 'http://localhost:3000/requests';

class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {
        id : 0,
        branch_id : 0,
        product_id : 0,
        quantity : 0,
        price : 0,
        status : 'OPEN',
        created_at : '',
        show: false,
        formdata: []
    };

    // componentDidMount() {

    axios.get(SERVER_URL_requests).then((results) => {
      this.setState({formdata : results.data});
    })
  // };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
  }

  showModal() {
    this.setState({ show: 'true' });
  }

  showEditModal(event, i) {
    const recordToEdit = this.state.formdata.filter((item, index) => {
      return index === i;
    })[0];

    this.setState({
     [event.target.name]: event.target.value
   });


    this.setState({
      show: true,
      id: recordToEdit.id,
      branch_id: recordToEdit.branch_id,
      product_id: recordToEdit.product_id,
      quantity: recordToEdit.quantity,
      price: recordToEdit.price,
      status: recordToEdit.status,
      created_at: recordToEdit.created_at
    });
  }

  hideModal() {
    this.setState({
      show: false,
      branch_id : 0,
      product_id : 0,
      quantity : 0,
      price : 0,
      status : 'OPEN',
      created_at : ''
    });
  }

  handleInputChange(event) {
    // update the input that changed
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const formItem = {
      id: this.state.id,
      branch_id: this.state.branch_id,
      product_id: this.state.product_id,
      quantity: this.state.quantity,
      price: this.state.price,
      status: this.state.status,
      created_at: this.state.created_at
    };

    if (
      this.state.branch_id === "" ||
      this.state.product_id === "" ) {
      alert("Please fill mandatory filed");
    } else {
      if (this.state.formdata.filter(item => item.id === formItem.id).length > 0) {
        // update item
        this.setState(prevState => ({
          formdata: prevState.formdata.map(item => {
            if (item.id === formItem.id)
              return formItem;
            else
              return item;
          })
        }));

      } else {
        // add new item
        this.setState(prevState => ({
          formdata: prevState.formdata.concat(formItem)
        }));

      }

      alert("form submited: ");

      this.setState({
        branch_id : 0,
        product_id : 0,
        quantity : 0,
        price : 0,
        status : 'OPEN',
        created_at : ''
      });
    }
    event.preventDefault();
  }

  deleteExpense(i) {

    let data = this.state.formdata[i];
    var id = data.id;

    alert("are you sure you want to Delete this item ?");
    this.setState({
      formdata: this.state.formdata.filter((item, index) => {
        return index !== i;
      })
    });

    axios.delete(`${SERVER_URL_requests}/${id}`)
    .then(formdata => formdata.json())
      .then(
        (result) => {

        }
      )
  }

  render() {
    return (
      <div>
        <p>Welcome</p>

        <ButtonToolbar>
        <Button  onClick={this.showModal}>
           Add Request
         </Button>
          <Table striped bordered condensed hover>
            <thead>
            <tr>
            <th>Id</th>
            <th>Branch</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
            </thead>
            <tbody>
              {this.state.formdata.map((item, i) => (
                <tr key={i}>
                <td>{item.id}</td>
                <td>{item.branch_id}</td>
                <td>{item.product_id}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>{item.created_at}</td>
                  <td>
                    <Button variant="warning" onClick={(e) => this.showEditModal(e, i)}>
                    Update
                    </Button>
                    </td>
                    <td>
                    <Button
                      variant="danger"
                      onClick={() => this.deleteExpense(i)}
                    >
                      Delete
                    </Button>
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>
          <Modal
            {...this.props}
            show={this.state.show}
            bsPrefix= 'modal'
            onHide={this.hideModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-lg "
                className="text-center"
              >
                Add Expenses
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="formHorizontalId">
                  <Col smOffset={4} sm={4}>
                    <FormControl
                    type="hidden"
                    name="id"
                    value={this.state.id}
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalBranch">
                  <Col smOffset={4} sm={4}>
                    <FormControl
                    type="number"
                    name="branch_id"
                    value={this.state.branch_id}
                    placeholder="Branch"
                    onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalProduct">
                  <Col smOffset={4} sm={4}>
                  <Form.Control
                      type="number"
                      name="product_id"
                      value={this.state.product_id}
                      onChange={this.handleInputChange}
                      placeholder="Product"
                      />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalQuantity">
                  <Col smOffset={4} sm={4}>
                    <FormControl
                    type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleInputChange}
                  placeholder="Quantity"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPrice">
                  <Col smOffset={4} sm={4}>
                    <FormControl
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                    placeholder="Price"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalStatus">
                  <Col smOffset={4} sm={4}>
                    <FormControl
                    type="text"
                    name="status"
                    value={this.state.status}
                    onChange={this.handleInputChange}
                    placeholder="Status"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalCreatedAt">
                  <Col smOffset={4} sm={4}>
                    <FormControl
                    type="hidden"
                    name="created_at"
                    value={this.state.created_at}
                    onChange={this.handleInputChange}
                    placeholder="created_at"
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={5} sm={4}>
                    <Button type="submit" >
                      Add
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
          </Modal>
        </ButtonToolbar>
      </div>
    );
  }
}


export default Requests;

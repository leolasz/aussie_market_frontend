import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Col, Button, Table} from "react-bootstrap";

const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = "http://localhost:3000/branches";
const SERVER_URL_products = "http://localhost:3000/products";


class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      branchList: [],
      productList: [],
      formdata: [],
      // show: false

    };

    this.onSave = this.onSave.bind(this);

    const fetchResults = () => {
      //Branches
      axios.get(SERVER_URL_branches).then((response) => {
        this.setState({
          branchList: response.data,
        });
      });
      //Products
      axios.get(SERVER_URL_products).then((response) => {
        this.setState({
          productList: response.data,
        });
      });
      //Requests
      axios.get(SERVER_URL_requests).then((results) => {
        this.setState({ formdata: results.data });
      });
    };


  fetchResults();
    this.deleteRecord = this.deleteRecord.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data, e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSave() {
    axios.get(SERVER_URL_requests)
      .then(response => {
          this.setState({ formdata: response.data});
        })
      //.catch(err => { console.log('Something bad is happened:', err) });
  }

  deleteRecord(i) {
    let data = this.state.formdata[i];
    var id = data.id;

    alert("are you sure you want to Delete this item ?");
    this.setState({
      formdata: this.state.formdata.filter((item, index) => {
        return index !== i;
      }),
    });

    axios
      .delete(`${SERVER_URL_requests}/${id}`)
      .then((result) => {

      });
  }

  editRecord(i) {
    let request = this.state.formdata[i];
    this.refs.editForm.setState({
          id: request.id,
          branch_id: request.branch_id,
          product_id: request.product_id,
          quantity: request.quantity,
          price: request.price,
          status: request.status
    });
  }

  render() {
    return (
      <div>
        <p>All Requests</p>
        <Table striped bordered hover>
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
                  <Button variant="info" onClick={() => this.editRecord(i)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => this.deleteRecord(i)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Edit ref='editForm' save={this.onSave}/>
      </div>
    );
  }
}

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '',
      branch_id: '',
      product_id: '',
      quantity: '',
      price: '',
      status: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    var id = this.state.id;
    axios.post(`${SERVER_URL_requests}/${id}/update`, this.state)
      .then(
        (result) => {
          this.props.save();
          this.setState({id : '',
                        branch_id: '',
                        product_id: '',
                        quantity: '',
                        price: '',
                        status: ''});
        }
      )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Branch:
          <input
            type="number"
            name='branch_id'
            value={this.state.branch_id}
            onChange={this.handleChange} />
        </label>
        <label>
          Product:
          <input
            type="number"
            name='product_id'
            value={this.state.product_id}
            onChange={this.handleChange} />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name='quantity'
            value={this.state.quantity}
            onChange={this.handleChange} />
        </label>
        <label>
          Price:
          <input
            type="float"
            name='price'
            value={this.state.price}
            onChange={this.handleChange} />
        </label>
        <label>
          Status:
          <input
            type="string"
            name='status'
            value={this.state.status}
            onChange={this.handleChange} />
        </label>
        <input type="hidden" name='id' value={this.state.id}/>
        <button type="submit">Save</button>
        <Button variant="danger"><Link to={'/main'}>Back Home page </Link></Button>{' '}
      </form>
    );
  }
}
export default Requests;

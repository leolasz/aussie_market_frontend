import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Col, Button, Table} from "react-bootstrap";


const SERVER_URL_products = 'http://localhost:3000/products';

class Products extends Component {

  constructor(){
    super();
    this.state = {
      productList: []
    };

    const fetchresult = () => {
        axios.get(SERVER_URL_products).then((results) => {
          console.log(results.data);
          this.setState({productList: results.data});
        })
    }

    fetchresult();

        this.deleteRecord = this.deleteRecord.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);

  }

  handleChange(data, e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSave() {
    axios.get(SERVER_URL_products)
      .then(response => {
          this.setState({ productList: response.data});
        })
      //.catch(err => { console.log('Something bad is happened:', err) });
  }

  deleteRecord(i) {
    let data = this.state.productList[i];
    var id = data.id;

    alert("are you sure you want to Delete this item ?");
    this.setState({
      productList: this.state.productList.filter((item, index) => {
        return index !== i;
      }),
    });

    axios
      .delete(`${SERVER_URL_products}/${id}`)
      .then((result) => {

      });
  }

  editRecord(i) {
    let request = this.state.productList[i];
    this.refs.editForm.setState({
          id: request.id,
          item: request.item,
          price: request.price,
          image: request.image
    });
  }

  render(){
    return(
      <div>
        <h3>All Products</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productList.map((item, i) => (
                <tr key={i}>
                  <td>{item.item}</td>
                  <td>{item.price}</td>
                  <td>{item.image}</td>
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
    )
  }
}

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '',
      item: '',
      price: '',
      image: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var id = this.state.id;
    axios.post(`${SERVER_URL_products}/${id}/update`, this.state)
      .then(
        (result) => {
          this.props.save();
          this.setState({id : '',
                        item: '',
                        price: '',
                        image: ''});
        }
      )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Product:
          <input
            type="string"
            name='item'
            value={this.state.item}
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
          Image:
          <input
            type="text"
            name='image'
            value={this.state.image}
            onChange={this.handleChange} />
        </label>
        <input type="hidden" name='id' value={this.state.id}/>
        <button type="submit">Save</button>
        <Button variant="danger"><Link to={'/main'}>Back Home page </Link></Button>{' '}
      </form>
    );
  }
}

export default Products;

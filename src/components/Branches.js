import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Col, Button, Table} from "react-bootstrap";


const SERVER_URL_branches = 'http://localhost:3000/branches';

class Branches extends Component {

  constructor(){
    super();
    this.state = {
      branchList: []
    };

    const fetchresult = () => {
        axios.get(SERVER_URL_branches).then((results) => {
          console.log(results.data);
          this.setState({branchList: results.data});
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
    axios.get(SERVER_URL_branches)
      .then(response => {
          this.setState({ branchList: response.data});
        })
      //.catch(err => { console.log('Something bad is happened:', err) });

  }

    deleteRecord(i) {
      let data = this.state.branchList[i];
      var id = data.id;

      alert("are you sure you want to Delete this item ?");
      this.setState({
        branchList: this.state.branchList.filter((item, index) => {
          return index !== i;
        }),
      });

      axios
        .delete(`${SERVER_URL_branches}/${id}`)
        .then((result) => {

        });
    }

    editRecord(i) {
      let request = this.state.branchList[i];
      this.refs.editForm.setState({
        id: request.id,
        branch_name: request.branch_name,
        location: request.location,
        email: request.email,
        contact: request.contact
      });
    }


  render(){
    return(
      <div>
        <Button variant="danger">
          <Link to={'/main'}>Home</Link>
        </Button>
        <h3>All Branches</h3>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Branch ID</th>
                <th>Branch Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {this.state.branchList.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.branch_name}</td>
                  <td>{item.location}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
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
      branch_name: '',
      location: '',
      email: '',
      contact: ''
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
    axios.post(`${SERVER_URL_branches}/${id}/update`, this.state)
      .then(
        (result) => {
          this.props.save();
          this.setState({id : '',
                        branch_name: '',
                        location: '',
                        email: '',
                        contact: ''});
        }
      )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Branch Name:
          <input
            type="text"
            name='branch_name'
            value={this.state.branch_name}
            onChange={this.handleChange} />
        </label>
        <label>
          Location:
          <input
            type="text"
            name='location'
            value={this.state.location}
            onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input
            type="text"
            name='email'
            value={this.state.email}
            onChange={this.handleChange} />
        </label>
        <label>
          Contact:
          <input
            type="string"
            name='contact'
            value={this.state.contact}
            onChange={this.handleChange} />
        </label>
        <input type="hidden" name='id' value={this.state.id}/>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Branches;

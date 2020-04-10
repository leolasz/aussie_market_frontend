import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import EditRequest from './EditRequest';
import './Requests.css';


const SERVER_URL_requests = 'http://localhost:3000/requests';

class Requests extends Component {

  constructor(){
    super();
    this.state = {
      reqs: [],
      id : 0,
      show: false
    };

    console.log("array:",this.state.reqs);

    const fetchresult = () => {
        axios.get(SERVER_URL_requests).then((results) => {
          console.log(results.data);
          this.setState({reqs: results.data});
        })
    }

    fetchresult();

      this._deleteRequest = this._deleteRequest.bind(this);
  }

  _deleteRequest(requestId) {
    console.log(requestId);

    const { reqs } = this.state.reqs;

        axios.delete(`${SERVER_URL_requests}/${requestId}/`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                reqs: reqs.filter(req => req.id !== requestId)
              });
            }
          )
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
// .............................
  getData = (editData) => {
// This is the row data from ChildComponent
  console.log(editData);
}

//...................................
  render(){
    return(
      <div>
        <h3>All Requests</h3>
        <table>
        <tbody>
              <tr>
                <th>Branch ID</th>
                <th>Product ID</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
              </tr>

              {this.state.reqs.map(req => (
                <tr key={req.id}>
                  <td>{req.branch_id}</td>
                  <td>{req.product_id}</td>
                  <td>{req.quantity}</td>
                  <td>{req.price}</td>
                  <td>{req.status}</td>
                  <td>
                      <Modal show={this.state.show} handleClose={this.hideModal}>
                        <EditRequest editData={req} onChange={this.getData} />
                      </Modal>
                      <button type="button" onClick={this.showModal}>
                      Edit
                      </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => this._deleteRequest(this,req.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              </tbody>
          </table>
      </div>
    )
  }

}

const Modal = ({ show, handleClose,  children }) => {

  const showHideClassName = show == true ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Requests;

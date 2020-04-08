import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL_requests = 'http://localhost:3000/requests';

class Requests extends Component {

  constructor(){
    super();
    this.state = {
      reqs: []
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


  render(){
    return(
      <div>
        <h3>All Requests</h3>
        <table>
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
                    <button type="button"><Link to={"/editRequest"}>Edit</Link></button>
                    &nbsp;<button type="button" onClick={() => this._deleteRequest(this,req.id)}>Delete</button>
                  </td>
                </tr>
              ))}

          </table>

      </div>
    )
  }

}

export default Requests;

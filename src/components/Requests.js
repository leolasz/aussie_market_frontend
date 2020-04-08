import React, { Component } from 'react';
import axios from 'axios';


const SERVER_URL_requests = 'http://localhost:3000/requests.json';

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

        this.deleteReq = this.deleteReq.bind(this);

  }

  deleteReq = (index) => {
      const reqs = Object.assign([],this.state.reqs);
      reqs.splice(index,1);
      this.setState({reqs:reqs});
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
                    <button type="button">Edit</button>
                    &nbsp;<button type="button" onClick={this.deleteReq.bind(req.id)}>Delete</button>
                  </td>
                </tr>
              ))}

          </table>
      </div>
    )
  }

}

export default Requests;

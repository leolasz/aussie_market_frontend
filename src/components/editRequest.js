import React, {Component} from 'react';
import axios from 'axios';

const SERVER_URL_requests = 'http://localhost:3000/branches';
const SERVER_URL_branches = 'http://localhost:3000/products';
const SERVER_URL_products = 'http://localhost:3000/requests';

class editRequest extends Component {

    constructor(){
      super();
      this.state = {
        b: [],
        p: [],
        reqs: []
      };

      const fetchresult = () => {
          axios.get(SERVER_URL_requests).then((results) => {
            this.setState({reqs: results.data});
          })
          axios.get(SERVER_URL_branches).then((results) => {
            this.setState({b: results.data});
          })
          axios.get(SERVER_URL_products).then((results) => {
            this.setState({p: results.data});
          })
          console.log(this.state.b,this.state.p,this.state.reqs);  
      }

      fetchresult();

    }

  render(){
    return(
      <div>
      <h3>Edit Request</h3>

      <select id="selectBranches">
      {this.state.b.map(branch => (
          <option>{branch.brainch_id}</option>
      ))}
      </select>

      </div>
    )
  }

}
export default editRequest;

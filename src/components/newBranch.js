import React, {Component} from 'react';
import axios from 'axios';

const SERVER_URL_requests = 'http://localhost:3000/requests';
const SERVER_URL_branches = 'http://localhost:3000/branches';
const SERVER_URL_products = 'http://localhost:3000/products';

class newBranch extends Component {

    constructor(){
      super();
      this.state = {
        b: [],
        p: [],
        bran: [],
        total_price: 0,
        current_date : new Date()
      };

      const fetchresult = () => {

        axios.get(SERVER_URL_branches).then((results) => {
            this.setState({b: results.data});
          })
      }

      fetchresult();
      console.log(this.state.b,this.state.p,this.state.bran);

      this._handleSave = this._handleSave.bind(this);
    }

    // Event listener
    _handleSave(event) {
      event.preventDefault(); // Stay here and handle the submission with JS.

      axios.post(SERVER_URL_branches).then((results) => {
        this.setState({bran: results.data});
      })
    }


  render(){
    return(
      <div>
      <h3>New Branch</h3>
      <form>
      <label>Branch name:</label><select id="selectBranches">
      {this.state.b.map((branch,key) => (
          <option>{branch.branch_name}</option>
      ))}
      </select> <br/>
      <label>Location:</label><select id="selectProduct">
      {this.state.p.map((location,key) => (
          <option>{location.item}</option>
      ))}
      </select> <br/>
      <label>email:</label><input type="text" /><br/>
      <label>contact:</label><input type="text" value={this.state.bran} /><br/>
      <label>user:</label><input type="text" value={this.state.bran} /><br/>
      <input type="submit" value="Save" onClick={ this._handleSave }/>
      </form>
      </div>
    )
  }

}
export default newBranch;

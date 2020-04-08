import React, { Component } from 'react';
import axios from 'axios';


const SERVER_URL_branches = 'http://localhost:3000/branches.json';

class Branches extends Component {

  constructor(){
    super();
    this.state = {
      branch_list: []
    };

    const fetchresult = () => {
        axios.get(SERVER_URL_branches).then((results) => {
          console.log(results.data);
          this.setState({branch_list: results.data});
        })
    }

    fetchresult();

  }


  render(){
    return(
      <div>
        <h3>All Branches</h3>
        <table>
              <tr>
                <th>Branch ID</th>
                <th>Branch Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>

              {this.state.branch_list.map(branch => (
                <tr key={branch.id}>
                  <td>{branch.id}</td>  
                  <td>{branch.branch_name}</td>
                  <td>{branch.location}</td>
                  <td>{branch.email}</td>
                  <td>{branch.contact}</td>
                  <td>
                    <button type="button">Edit</button>
                    &nbsp;<button type="button">Delete</button>
                  </td>
                </tr>
              ))}

          </table>
      </div>
    )
  }

}

export default Branches;

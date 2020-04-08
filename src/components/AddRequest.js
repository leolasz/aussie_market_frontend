import React, {Component} from 'react';
import axios from 'axios';

class AddRequest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('submited ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <br></br><br></br>
          <label>
            Status:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Branch_id:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Branch_id:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            product_id:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
          quantity_id:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
          price:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
         
        
          <label>
          created_at:
            <input type="datetime" value={this.state.value} onChange={this.handleChange} />
          </label>

          <br></br><br></br><br></br>

          <input type="submit" value="Send" />
        </form>
      );
    }
  }


export default AddRequest;








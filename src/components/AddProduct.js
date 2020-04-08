import React, { Component } from 'react'

const SERVER_URL_addproducts = 'http://localhost:3000/products'

class AddProduct extends Component {
  constructor(){
    super();
    this.state = { id:'', item:'' }
    this._handleIdChange = this._handleIdChange.bind(this)
    this._handleItemChange = this._handleItemChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

    _handleIdChange(event){
      this.setState({id: event.target.value})
    }

    _handleItemChange(event){
      this.setState({item: event.target.value})
    }



    _handleSubmit(event){
      event.preventDefault();
      this.props.onSubmit( this.state.id, this.state.item )
      this.props.updateResults( this.state.id, this.state.item )
    }



  render(){
    return(
      <div>




        <form onSubmit={ this._handleSubmit }>
          <select onChange={this._handleIdChange}>{this.props.products.map((products)=> <option key={products.id}>{products.id}</option>)}
          </select>
            <span>→</span>
          <select onChange={this._handleItemChange}>{this.props.products.map((products)=> <option key={products.item}>{products.item}</option>)}
          </select>
          <input type="submit"/>


        </form>


      </div>

      )
    }
  }



export default AddProduct;
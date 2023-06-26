import React, { Component } from 'react'
import './AddNewProductComponent.css'

class AddNewProductComponent extends Component {
  constructor(props)
    {
        super(props)

        this.state = {
          productID:'',
          productName:'',
          productCategory:'',
          productCost:'',
          productStockQuantity:'',
          productImage: null
        }
    }

    productIDHandler = (event) => {
      this.setState({
        productID : event.target.value
      })
    }
    productNameHandler = (event) => {
      this.setState({
        productName : event.target.value
      })
    }
    productCategoryHandler = (event) => {
      this.setState({
        productCategory : event.target.value
      })
    }
    productCostHandler = (event) => {
      this.setState({
        productCost : event.target.value
      })
    }
    productStockQuantityHandler = (event) => {
      this.setState({
        productStockQuantity : event.target.value
      })
    }
    productImageHandler = (event) => {
        this.setState({
          productImage: event.target.files[0]
        })
    }
    
    formSubmitHandler = (event) =>{
        event.preventDefault()
        const formData = new FormData()
        formData.append('productID',this.state.productID)
        formData.append('productName',this.state.productName)
        formData.append('productCategory',this.state.productCategory)
        formData.append('productCost',this.state.productCost)
        formData.append('productStockQuantity',this.state.productStockQuantity)
        formData.append('productImage',this.state.productImage)

        fetch('http://localhost:3500/api/v1/shoppingCart/upload',{
        method:'POST',
        crossDomain: true,
        body: formData
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ErrorMessage)
            {
                alert(data.ErrorMessage)
            }
            else{
                alert(`Product added successfully`)
                window.location.href = '/'
            }
        })
    }

  render() {
    const {productID, productName, productCategory, productCost, productStockQuantity} = this.state
    return (
      <div className='flex justify-center mt-[2%]'>
        <form className='border border-black p-5 flex flex-col form-container' onSubmit={this.formSubmitHandler}>
            <h2 className='text-4xl text-center py-2 border-b-gray-600'>Adding a new product</h2>

        <div className='form-group'>
            <label>Product Name</label>
            <input
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type='text'
            placeholder='Enter the product Name'
            value={productName}
            onChange={this.productNameHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Product ID</label>
            <input
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type='text'
            placeholder='Enter the product ID'
            value={productID}
            onChange={this.productIDHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Product Category</label>
            <select
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            value={productCategory}
            onChange={this.productCategoryHandler}
            required
            >
            <option value="">-- Please select --</option>
            <option value="Electronics">Electronics</option>
            <option value="Food & Beverages">Food & Beverages</option>
            <option value="Toys">Toys</option>
            <option value="Books">Books</option>
            </select>
        </div>

        <div className='form-group'>
            <label>Product Cost</label>
            <input
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type="text"
            pattern="[0-9]*"
            placeholder='Enter the product cost'
            value={productCost}
            onChange={this.productCostHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Product Stock Quantity</label>
            <input
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type="text"
            pattern="[0-9]*"
            placeholder='Enter the stock quantity'
            value={productStockQuantity}
            onChange={this.productStockQuantityHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Product Image</label>
            <input
            className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type='file'
            onChange={this.productImageHandler}
            required
            />
        </div>

        <div>
            <button type='submit'>Add</button>
        </div>
        </form>
        </div> 
    )
  }
}

export default AddNewProductComponent
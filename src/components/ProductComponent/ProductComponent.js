import React, { useEffect, useState } from 'react'

function ProductComponent({productItem}) {

  const [stockQuantity, setStockQuantity] = useState(productItem.productStockQuantity)
  const [selectedQuantity, setSelectedQuantity] = useState(0)

  const incrementHandler = () => {
    if (stockQuantity > 0){
      setSelectedQuantity(selectedQuantity+1)
      setStockQuantity(stockQuantity-1)
    }
    else{
      alert(`${productItem.productName} is out of stock`)
    }
  }

  const decrementHandler = () => {
    if (selectedQuantity > 0)
    {
      setSelectedQuantity(selectedQuantity-1)
      setStockQuantity(stockQuantity+1)
    }
    else{
      alert(`${productItem.productName} is not added to the cart`)
    } 
  }

  const addingToCartHandler = async() => {
    if (selectedQuantity > 0)
    {
      const response = await fetch(`http://localhost:3500/api/v1/shoppingCart/cart/`,{
        method:'POST',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          productID:productItem.productID ,
          productName: productItem.productName ,
          productCost: productItem.productCost ,
          productStockQuantity : stockQuantity,
          productSelectedQuantity: selectedQuantity
        })
      })
      const data = await response.json()
      if (data.ErrorMessage)
      {
        alert(`${data.ErrorMessage}`)
      }
      else
      {
        alert(`${productItem.productName} is added to cart successfully`)
        setSelectedQuantity(0)
      }
    }
  }

return (
        <div className="w-[450px] mt-10 border border-slate-400">
          <div className="p-3">
          <h3 className='text-5xl'>{productItem.productName}</h3>
            <p className="text-gray-500 text-xl mt-2">
              {productItem.productCategory} ({productItem.productID})
            </p>
            <img className='p-3 w-[100p] h-[300px]' src={productItem.productImagePath}/>
            <p className="text-2xl mt-2">Price :<span className=' text-xl ml-2'>Rs. {productItem.productCost}</span></p>
            <p className="text-2xl mt-2">Available stock : <span className='text-xl'>{stockQuantity}</span> </p>
            <div className='flex justify-center items-center my-4'>
            <button className='bg-green-300 hover:bg-green-300 text-green-800 rounded-full w-10 h-10 flex items-center justify-center mr-2 text-4xl' onClick={decrementHandler}>-</button>
            <p class='text-4xl'>{selectedQuantity}</p>
            <button className='bg-green-300 hover:bg-green-300 text-green-800 rounded-full w-10 h-10 flex items-center justify-center ml-2 text-4xl text-bold' onClick={incrementHandler}>+</button>
            </div>
            <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full' onClick={addingToCartHandler}>
              Add to Cart
            </button>
          </div>
        </div>
      );
}

export default ProductComponent
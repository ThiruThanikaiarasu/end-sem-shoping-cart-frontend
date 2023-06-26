import React, { useEffect, useState } from 'react'
import './CartItemComponent.css'

function CartItemComponent({cartItem}) {
return (

        <div className="cart-card">
          <div className="cart-text-container border rounded-xl border-gray-600">
            <p className='cart-item-text-grey'>{cartItem.productID}</p>
            <p className='cart-item-text'>{cartItem.productName}</p>
            <p className='cart-item-text-green'>Rs. {cartItem.productCost}</p>
            <p className='cart-item-text'>{cartItem.productSelectedQuantity}</p>
            <p className='cart-item-text'>Rs. {cartItem.totalProductCost}</p>
          </div>
        
  </div>

      //   <div className="w-screen">
      //   <div className="flex ">

      //     <p className='cart-item-text-grey'>{cartItem.productID}</p>

      //     <p className='cart-item-text'>{cartItem.productName}</p>

      //     <p className='cart-item-text-green'>Rs. {cartItem.productCost}</p>

      //     <p className='cart-item-text'>{cartItem.productSelectedQuantity}</p>

      //     <p className='cart-item-text'>Rs. {cartItem.totalProductCost}</p>
      //   </div>
      // </div>
      );
}

export default CartItemComponent
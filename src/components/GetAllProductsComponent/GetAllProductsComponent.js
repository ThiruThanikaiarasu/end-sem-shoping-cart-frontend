import React, { useState, useEffect } from 'react'
// import './GetAllProductsComponent.css'
import ProductComponent from '../ProductComponent/ProductComponent'


function GetAllProductsComponent() {
    const [products, setProducts] = useState([])

    const fetchAllProducts  = async() => {
        const response = await fetch('http://localhost:3500/api/v1/shoppingCart/')
        const data = await response.json()
        console.log(data);
        setProducts(data)
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

  return (
    <div className='flex justify-center border mt-5 mb-5 border-black'>
        <div className='grid grid-cols-3 gap-10'>
            {products.map(productItem=>(
                <ProductComponent productItem={productItem}/>
            ))}
        </div>
    </div>

  )
}

export default GetAllProductsComponent
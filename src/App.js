import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import GetAllProductsComponent from './components/GetAllProductsComponent/GetAllProductsComponent';
import AddNewProductComponent from './components/AddNewProductComponent/AddNewProductComponent';
import GetAllCartItemsComponent from './components/GetAllCartItemsComponent/GetAllCartItemsComponent';

function App() {
    return (
        <Router className='w-screen'>
            <div className="container w-full h-screen">
              <h1 className='text-center text-5xl p-4'>Shopping Cart App</h1>
              
            <nav className="flex justify-center border border-black text-4xl">
                <Link 
                    className='px-7 py-2 hover:bg-green-500'
                    to="/" >Home</Link>
                <Link 
                    className='px-7 py-2 hover:bg-green-500'
                    to="/admin/add" >Add Products</Link>
                <Link 
                    className='px-7 py-2 hover:bg-green-500'
                    to="/cart" >Cart</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllProductsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewProductComponent/>}></Route>
                 <Route path='/cart' element={<GetAllCartItemsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
    );
}

export default App;



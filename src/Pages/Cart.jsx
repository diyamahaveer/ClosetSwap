import React from 'react';
import './Cart.css';
import shoppingcart from '../Components/Assets/shoppingcart.png';

const Cart = () => {
  return (
    <div className='cart-container'>
      <input type="text" placeholder="Search" className='search' />
      <div className='content-center'>
        <div className='cart-text'>Your cart is empty.</div>
        <div className='cart-text2'>
          <a href="/">Discover something you want for your closet</a>
        </div>
        <div className='image'>
          <img src={shoppingcart} alt="Shopping Cart"/>
        </div>
      </div>
    </div>
  )
}

export default Cart;
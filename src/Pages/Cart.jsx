import React from 'react';
import './Cart.css';
import shoppingcart from '../Components/Assets/shoppingcart.png';

const Cart = () => {
  return (
    <div className='cart-container'>
         <input
            type="text"
            placeholder="Search"
            className='search'
          />

          <div className='content-center'>
            <div className='cart-text'>Your cart is empty</div> {/* Add a class to the text */}
            <div className='image'>
              <img src={shoppingcart} alt="Shopping Cart"/>
            </div>
          </div>
    </div>
  )
}

export default Cart;

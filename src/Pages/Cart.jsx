// Cart.js
import React, { useState, useEffect } from 'react';
import './Cart.css';
import Tile from '../Components/Tile/Tile';
// import SearchBar from '../Pages/SearchBar';

const Carts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const storedCarts = localStorage.getItem('carts');
    if (storedCarts) {
      setCarts(JSON.parse(storedCarts));
    }
  }, []);

  const clearCarts = () => {
    localStorage.removeItem('carts'); 
    setCarts([]); 
  };

  return (
    <div className='cart-container'>
      <div className='cart-content-center'>
        <div className='cart-text'>My Cart</div>
        {carts.length > 0 ? (
          <>
            <button className='clear-carts-button' onClick={clearCarts}>
              Clear Cart
            </button>
            <div className='carts-list'>
              {carts.map((item, index) => (
                <div key={index} className='cart-item'>
                  <Tile
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    category={item.category}
                    price={item.price}
                    size={item.size}
                    date={item.date}
                    color={item.color}
                    image={item.imageUrl}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='cart-text2'>You currently have no items in the cart.</div>
            <button className='cart-text3' onClick={() => window.location.href = '/'}>
              Shop Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carts;

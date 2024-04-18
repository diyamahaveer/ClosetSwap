import React, { useState, useEffect } from 'react';
import './Favorites.css';
import Tile from '../Components/Tile/Tile';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const clearFavorites = () => {
    localStorage.removeItem('favorites'); 
    setFavorites([]); 
  };

  return (
    <div className='fav-container'>
      <input type="text" placeholder="Search" className='search' />
      <div className='fav-content-center'>
        <div className='fav-text'>My Favorites</div>
        {favorites.length > 0 ? (
          <>
            <button className='clear-favorites-button' onClick={clearFavorites}>
              Clear Favorites
            </button>
            <div className='favorites-list'>
              {favorites.map((item, index) => (
                <div key={index} className='favorite-item'>
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
            <div className='fav-text2'>You currently have no items favorited.</div>
            <button className='fav-text3' onClick={() => window.location.href = '/'}>
              Start Adding to my Favorites
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;

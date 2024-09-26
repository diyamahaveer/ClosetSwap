import React, {useState, useEffect} from 'react'
import './Favorites.css'

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
        <div className='fav-text2'>You currently have no items favorited.</div>
        <button className='fav-text3' onClick={() => window.location.href = '/'}>
          Start Adding to my Favorites
        </button>
      </div>
    </div>
  )
}

export default Favorites

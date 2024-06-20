import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import defaultImage from '../Assets/product_1.jpeg';

export default function Tile({ id, name, price, size, date, image }) {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Check if the product is already in favorites
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorited = favorites.some(fav => fav.id === id);
        setIsFavorite(isFavorited);
    }, [id]);

    const handleTileClick = () => {
        navigate(`/product/${name}`);
    };

    const handleHeartClick = (event) => {
        event.stopPropagation(); // Prevent triggering the tile click

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!isFavorite) {
            // Add to favorites
            favorites.push({ id, name, price, size, date, image });
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        } else {
            // Remove from favorites
            const updatedFavorites = favorites.filter(fav => fav.id !== id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        }
    };

    return (
        <div className='tile' onClick={handleTileClick}>
            <div className='tile-img'>
                <img src={image || defaultImage} alt={name} />
            </div>
            <div className="tile-info">
                <div className="tile-name">
                    <span>{name}</span>
                </div>
                <div className="tile-price">
                    <p>${price}</p>
                </div>
                <div className="tile-size">
                    <p>Size: {size}</p>
                </div>
                <div className="tile-date">
                    <span>{date}</span>
                </div>
            </div>
            <div className="tile-heart" onClick={handleHeartClick}>
                <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
            </div>
        </div>
    );
}

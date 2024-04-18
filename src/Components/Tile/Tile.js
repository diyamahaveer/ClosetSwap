import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tile.css';
import defaultImage from '../Assets/product_1.jpeg';

export default function Tile({ name, price, size, date, image, id }) {
    const navigate = useNavigate();

    // This function will be called when the tile is clicked
    const handleTileClick = () => {
        navigate(`/product/${name}`);
    };

    return (
        <div className='tile' onClick={handleTileClick}> 
            <div className='tile-img'>
                <img src={image || defaultImage} alt={name} width={200} height={200} />
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
        </div>
    );
}

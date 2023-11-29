// Tile.js
import React from 'react';

const Tile = ({ title, content }) => {
  return (
    <div className="tile">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Tile;
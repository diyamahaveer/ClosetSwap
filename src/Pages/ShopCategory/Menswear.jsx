import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import Tile from '../../Components/Tile/Tile';
import image from '../../Components/Assets/product_1.jpeg';
import './Category.css';

const Menswear = () => {
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('0');
  const [sizeFilter, setSizeFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data, error } = await supabase.from('Products').select('*');
        if (error) throw error;
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesSearch = searchInput === '' || product.name.toLowerCase().includes(searchInput.toLowerCase());
      const matchesPrice = priceFilter === '0' || parseInt(product.price) <= parseInt(priceFilter);
      const matchesSize = sizeFilter === '' || product.size === sizeFilter;
      const matchesColor = colorFilter === '' || product.color === colorFilter;
      return matchesSearch && matchesPrice && matchesSize && matchesColor;
    });

    setFilteredProducts(filtered);
  }, [searchInput, priceFilter, sizeFilter, colorFilter, products]);

  return (
    <div>
      <div className='products'>
      <div className = 'title'>
          <h1>Menswear</h1>
        </div>
        <div className='filter'>
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className='custom-select'
          />
          <select onChange={(e) => setPriceFilter(e.target.value)} className='custom-select'>
            <option value="0">Price</option>
            <option value="5">$5</option>
            <option value="10">$10</option>
            <option value="15">$15</option>
            <option value="20">$20</option>
            {/* Add more categories as needed */}
          </select>
          <select onChange={(e) => setSizeFilter(e.target.value)} className='custom-select'>
            <option value="">Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            {/* Add more categories as needed */}
          </select>
          <select onChange={(e) => setColorFilter(e.target.value)} className='custom-select3'>
            <option value="">Color</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Purple">Purple</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Multi">Multi</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="tiles-wrapper">
          <div className='tile-container'>
            {filteredProducts.map((product) => (
              <Tile
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                size={product.size}
                date={product.date}
                color={product.color}
                image={image} // Change this if your product has an 'image_url' property
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menswear;
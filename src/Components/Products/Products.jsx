import React, { useState, useEffect } from 'react';
import './Products.css';
import { supabase } from '../../supabaseClient';
import Tile from '../Tile/Tile';
import defaultImage from '../Assets/product_1.jpeg';
import Shop from '../../Pages/Shop';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('0');
  const [sizeFilter, setSizeFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data, error } = await supabase.from('Products').select('*');
        if (error) throw error;

        // Constructing image URLs
        const productsWithImageUrl = data.map(product => {
          const imageUrl = product.image_url ?
            `https://ioudgjxgfrgkeoqvyyuh.supabase.co/storage/v1/object/public/image/${product.image_url}`
            : defaultImage;

          return {
            ...product,
            imageUrl
          };
        });

        setProducts(productsWithImageUrl);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesSearch = searchInput === '' || product.name.toLowerCase().includes(searchInput.toLowerCase());
      const matchesPrice = priceFilter === '0' || parseInt(product.price) <= parseInt(priceFilter);
      const matchesCategory = categoryFilter === '' || product.category === categoryFilter;
      const matchesSize = sizeFilter === '' || product.size === sizeFilter;
      const matchesColor = colorFilter === '' || product.color === colorFilter;
      return matchesSearch && matchesCategory && matchesPrice && matchesSize && matchesColor;
    });

    setFilteredProducts(filtered);
  }, [searchInput, categoryFilter, priceFilter, sizeFilter, colorFilter, products]);

  return (
    <div>
      <Shop />
      <div className='products'>
        <div className='filter'>
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className='custom-select'
          />
          <select onChange={(e) => setCategoryFilter(e.target.value)} className='custom-select4'>
            <option value="">Category</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Sweaters">Sweaters</option>
            <option value="Jackets">Jackets</option>
            <option value="Sweatshirts">Sweatshirts</option>
            <option value="Dresses">Dresses</option>
            <option value="Outerwear">Outerwear</option>
            <option value="Shoes">Shoes</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
          <select onChange={(e) => setPriceFilter(e.target.value)} className='custom-select'>
            <option value="0">Price</option>
            <option value="5">$5 and Under</option>
            <option value="10">$10 and Under</option>
            <option value="15">$15 and Under</option>
            <option value="20">$20 and Under</option>
          </select>
          <select onChange={(e) => setSizeFilter(e.target.value)} className='custom-select'>
            <option value="">Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
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
          </select>
        </div>
        <div className="tiles-wrapper">
          <div className='tile-container'>
            {filteredProducts.map((product) => (
              <Tile
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                size={product.size}
                date={product.date}
                image={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

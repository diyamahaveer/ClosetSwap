import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import defaultImage from '../Assets/product_1.jpeg';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Products')
          .select('*')
          .eq('name', id) // Ensure that 'name' is the correct column to filter by. If it's an ID, use 'id' instead.
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          setError('No product found');
          return; // Early return if no data
        }

        setProduct({
          ...data,
          imageUrl: data.image_url ? 
            `https://ioudgjxgfrgkeoqvyyuh.supabase.co/storage/v1/object/public/image/${data.image_url}` 
            : defaultImage
        });
      } catch (err) {
        setError('Error fetching product details: ' + err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-detail-container">
      <button className="add-to-favorites-button" onClick={addToFavorites}>Add to Favorites</button>
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Size: {product.size}</p>
        <p>Color: {product.color}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

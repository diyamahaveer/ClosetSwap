import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import defaultImage from '../Assets/product_1.jpeg';

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
          .eq('name', id)
          .maybeSingle();

        if (error) {
          throw error;
        }

        if (data) {
          setProduct({
            ...data,
            imageUrl: data.image_url 
              ? `https://ioudgjxgfrgkeoqvyyuh.supabase.co/storage/v1/object/public/image/${data.image_url}` 
              : defaultImage
          });
        } else {
          // Handle the case where data is null (no product found)
          setError('No product found');
        }
      } catch (error) {
        setError('Error fetching product details: ' + error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Ensure product is not null before trying to access its properties
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Size: {product.size}</p>
      <p>Color: {product.color}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;

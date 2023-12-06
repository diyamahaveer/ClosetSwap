import React, { useState, useEffect } from 'react';
import './Products.css';
import { supabase } from '../../supabaseClient';
import Tile from '../Tile/Tile';
import image from '../Assets/product_1.jpeg';
import Shop from '../../Pages/Shop';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [priceFilter, setpriceFilter] =  useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data, error } = await supabase.from('Products').select('*');
        if (error) {
          throw error;
        }
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    getProducts();
  }, []);

  return (
<div>
  <Shop/>
  <div className = 'products'>
    <div className = 'filter'>
  <select onChange={(e) => setpriceFilter(e.target.value)}>
    <option value="0">$0</option>
    <option value="5">$5</option>
    <option value="10">$10</option>
    <option value="15">$15</option>
   {/* Add more categories as needed */}
  </select>
  </div>
  <div class="tiles-wrapper">
    <div className='tile-container'>
      {products.filter((product) => parseInt(product.price) <= parseInt(priceFilter)).map((product) => (
        <Tile
          key={product.id} // Make sure to provide a unique key for each element in the array
          name={product.name}
          description={product.description}
          price={product.price}
          size={product.size}
          image={image}
        />
      ))}
    </div>
    </div>
    </div>
</div>
  );
};

export default Products;


// return (
//       <div>
//         <div className='pb-8'>
//         <h1 style={{ fontFamily: 'Times New Roman' }} className='text-3xl text-left'>&nbsp;ClosetSwap </h1>
//         </div>
//         <div>
//           <select onChange={(e) => setpriceFilter(e.target.value)}>
//               <option value="0">$0</option>
//               <option value="5">$5</option>
//               <option value="10">$10</option>
//               <option value="15">$15</option>
//               {/* Add more categories as needed */}
//             </select>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           {clothesData
//           .filter((clothes) => parseInt(clothes.price) <= parseInt(priceFilter))
//           .map((clothes) => (
//             <ClothesTile key={clothes.id} name = {clothes.name} description = {clothes.description} price = {clothes.price} image = {clothes.image}/>
//           ))}
//         </div>
//       </div>
//     )
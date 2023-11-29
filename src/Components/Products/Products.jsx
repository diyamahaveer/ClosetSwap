import React from 'react';
import './Products.css';
import { supabase } from '../../supabaseClient';
import { useEffect } from 'react';

const Products = () => {


  useEffect(() => {

    const getProduct = async () => {

      const { data, error } = await supabase.from('Products').select('*');
      console.log(data)
    };

    getProduct();
  }, []);



  return (
    <div className=''>
    </div>
  )
}

export default Products
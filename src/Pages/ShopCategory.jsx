import React from 'react'
import './CSS/ShopCategory.css'

const ShopCategory = (props) => {
  // const {all_products} = useContext(ShopContext);
  return (
    <div className = 'shop-category'>
      <img src = {props.banner} alt = "" />
    </div>
  )
}

export default ShopCategory

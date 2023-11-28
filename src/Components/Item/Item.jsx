import React from 'react'
import '.Item.css'

const Item = (props) => {
  return (
    <div className = 'item'>
        <img src={product_one}/>
        <p>{props.name}</p>
      <div className = "items-prices">
        <div className = "item-price-new">
            {props.new_price}
        </div>
      </div>
    </div>
  )
}

export default Item

import React from 'react'
import { grocery_img_url } from '../utils/constants';

const Grocerycard = (
  {
    id,
    title,
    description,
    price,
    rating,
    thumbnail,
    brand,
  }
) => {
  return (
    <div className="card">
        <img
          src={
            grocery_img_url+id+'/thumbnail.jpg'
          }
        />
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
        
        <span>
          <h4>{rating}</h4>
          </span>
          <h5 className="cst">{brand}</h5>
      </div>
    );
  
}

export default Grocerycard
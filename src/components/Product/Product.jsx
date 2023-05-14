import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

const Product = ({id,imageUrl}) => {
  return (
    <div className='product-content'>
      <Link to={`/detail/${id}`}>
        <img src={`${imageUrl}`} className='product-image' alt={`image_${id}`}/>
      </Link>
    
    </div>
  )
}

export default Product;
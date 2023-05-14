import React from 'react'
import { Link } from 'react-router-dom';
import useAppStateDispatch from '../../hooks/useAppStateDispatch';


const ProductDetail = ({ product }) => {
    const { id, title, thumbnail, description, price, count } = product;

    const dispatch = useAppStateDispatch();

    const removeItem = () => {
      dispatch({type:'removeItem',id})
    }
  
    return (
      <div className="product-description">
        <Link to={`/detail/${id}`}><img src={thumbnail} alt={`img_${id}`}/></Link>
        <div>
        <Link to={`/detail/${id}`}><p className="title-product">{title}</p></Link>
          <p>{description}</p>
          <p>$ {price}</p>
          {!count ? '' : <p>Quantity : {count}</p>}
          {!count ? '' : <button onClick={removeItem}>Delete</button>}
        </div>
      </div>
    );
  };

export default ProductDetail
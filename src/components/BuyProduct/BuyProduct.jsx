import React from 'react'
import { useNavigate } from 'react-router-dom';

import useAppStateDispatch from '../../hooks/useAppStateDispatch';
import ProductDetail from '../ProductDetail/ProductDetail';
import './styles.css';

const BuyProduct = ({product}) => {
  const dispatch = useAppStateDispatch();
  const navigate = useNavigate();
 
  let addItemCart = () => {
    dispatch({type:'added',...product})
  }

  let cancelBuy = () => {
    navigate('/');
  }

  let checkout = () => {
    navigate('/cart');
  }

  return (
    <div className='container'>
        <ProductDetail product={product}/>
        <div>
          <button className='button' onClick={addItemCart}>Add to cart</button>
          <button className='button' onClick={cancelBuy}>Cancel</button>
          <button className='button' onClick={checkout}>Checkout</button>
        </div>
    </div>
  )
}

export default BuyProduct
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getProduct } from '../services/api';
import BuyProduct from '../components/BuyProduct/BuyProduct';

const ProductDetailPage = () => {

  const [product, setProduct] = useState({})
  const {productId } = useParams();

  useEffect(() => {
    const selectedProduct = getProduct(productId)
   
    setProduct(selectedProduct)
    
  }, [productId])
  
  return (
        <BuyProduct product={product} />
  )
}

export default ProductDetailPage;
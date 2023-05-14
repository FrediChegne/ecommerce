import React from 'react'
import useAppState from '../hooks/useAppState';
import SearchResult from '../components/SearchResult/SearchResult';


const ProductFoundPage = () => {

    const {productsFound }=  useAppState();

  return (
    <SearchResult products={productsFound}/>
    
  )
}

export default ProductFoundPage;
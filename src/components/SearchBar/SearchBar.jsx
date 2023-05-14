import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import useAppStateDispatch from '../../hooks/useAppStateDispatch'
import './styles.css'



const SearchBar = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  let dispatch = useAppStateDispatch();

  const searchProducts = (event) => {
    setValue(event.target.value)
  }

  const search = async (event) => {
    if (event.key === 'Enter' && value.length > 0) {
      let {products} = await fetchProducts();
      dispatch({type:'newSearch',search : products})
      navigate('/search')
    }
  }

  async function fetchProducts() {
    const response = await  fetch(`https://dummyjson.com/products/search?q=${value}`)
    const productsFound = await response.json();
    return productsFound;
  }

  return (
      <input 
        className='search'
        placeholder='Enter product ...'
        type='text'
        value={value}
        onChange={searchProducts}
        onKeyDown={search}
      />
  )
}

export default SearchBar;
import  { useEffect, useState } from 'react'
import { useCart } from '../context/StateContext';

export const useProduct = (url) => {
    const [products, setproducts] = useState([]);
    const {products : other } = useCart();

    useEffect(() => {

      console.log('prod',other)
      
      setproducts(other);
    }, [url])
    

    return [products];
}

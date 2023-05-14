import React from 'react'
import { Link } from 'react-router-dom';

import { Cart } from '../../assets/Icon/icons';
import useAppState from '../../hooks/useAppState';
import './styles.css';


const NavTool = () => {

  const {cart} = useAppState();
  
  return (
    <nav className='nav'>
        <>
        <Link to={`/cart`}><Cart/></Link>
        <p>{cart.length}</p>
        </>
        
    </nav>
       
  )
}

export default NavTool;

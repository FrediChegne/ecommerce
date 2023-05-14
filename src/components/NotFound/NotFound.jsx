import React from 'react'

import { SadFace } from '../../assets/Icon/icons';

import './styles.css';

const NotFound = () => {
  return (
    <div className='container-notfound'>
        <SadFace />
        <p className='error'>404</p>
        <p className='error'>Page not found</p>
    </div>
  )
}

export default NotFound
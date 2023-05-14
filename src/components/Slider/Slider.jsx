import React from 'react'
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import camera from '../../assets/images/camera.jpeg'

import './styles.css'

const Slider = () => {
  return (
    <div className='content'>
      <img className='image' src = {camera}/> 
    </div>
  )
}

export default Slider;
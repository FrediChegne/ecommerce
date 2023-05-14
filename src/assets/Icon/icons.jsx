import React from 'react'

import { BsWhatsapp,BsTwitter,BsFacebook,BsGithub } from "react-icons/bs";

import {AiOutlineCopyright, AiOutlineShoppingCart,AiOutlineFrown } from "react-icons/ai";

import { BiStore,BiX } from "react-icons/bi";

import './styles.css'

export const Whatsapp = () => <BsWhatsapp className='small-icon' color='white'/>

export const Twitter = () => <BsTwitter className='small-icon' color='white'/>

export const Facebook = () => <BsFacebook className='small-icon' color='white'/>

export const Github = () => <BsGithub className='small-icon' color='white'/>

export const Copyright = () => <AiOutlineCopyright className='small-icon' color='white'/>

export const Cart = () => <AiOutlineShoppingCart className='small-icon' color='white'/>

export const SadFace = () => <AiOutlineFrown className='big-icon' color='black'/>

export const StoreLogo = () => <BiStore className='medium-icon' color='white'/>

export const Close = () => <BiX className='small-icon' color='black'/>






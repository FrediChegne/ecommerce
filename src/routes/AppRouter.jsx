import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CartPage from '../pages/CartPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ProductFoundPage from '../pages/ProductFoundPage'

const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/cart" element={ <CartPage />} />
            <Route path="/detail/:productId" element={ <ProductDetailPage/>} />
            <Route path="/search" element={ <ProductFoundPage/>} />
            <Route path="*" element={ <NotFoundPage/>} />
        </Routes>
  )
}

export default AppRouter


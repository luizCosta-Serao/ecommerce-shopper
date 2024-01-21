import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import MenBanner from './assets/banner_mens.png'
import WomenBanner from './assets/banner_women.png'
import JeweloryBanner from './assets/banner_jewelory.jpg'
import ElectronicBanner from './assets/banner_electronic.jpg'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route
            path='mens'
            element={<ShopCategory banner={MenBanner} category='men' />}
          />
          <Route
            path='womens'
            element={<ShopCategory banner={WomenBanner} category='women' />}
          />
          <Route
            path='jewelerys'
            element={<ShopCategory banner={JeweloryBanner} category='jewelery' />}
          />
          <Route
            path='electronics'
            element={<ShopCategory banner={ElectronicBanner} category='electronics' />}
          />
          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

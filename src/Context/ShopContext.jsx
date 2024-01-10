import React, { createContext } from 'react'
import AllProduct from '../assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < AllProduct.length + 1; index++) {
    cart[index] = 0
    
  }
  return cart
}

const ShopContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = React.useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => (
      {...prev, [itemId]:prev[itemId] + 1}
    ))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => (
      {...prev, [itemId]:prev[itemId] - 1}
    ))
  }

  const contextValue = {
    AllProduct,
    cartItems,
    addToCart,
    removeFromCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
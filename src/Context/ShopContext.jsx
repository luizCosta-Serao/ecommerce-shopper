import React, { createContext } from 'react'

export const ShopContext = createContext(null)

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState(null)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        return json
      } catch (error) {
        console.log(error)
      }
    }
    
    const getDefaultCart = async () => {
      const products = await fetchProducts()
      let cart = {};
      for (let index = 0; index < products.length + 1; index++) {
        cart[index] = 0
        
      }
      setCartItems(cart)
    }
    getDefaultCart()
  }, [])

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
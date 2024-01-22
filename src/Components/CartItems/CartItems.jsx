import React, { useContext } from 'react'
import styles from './CartItems.module.css'
import { ShopContext } from '../../Context/ShopContext'
import RemoveIcon from '../../assets/cart_cross_icon.png'

const CartItems = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext)
  const [total, setTotal] = React.useState(0)
  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        setProducts(json)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  React.useEffect(() => {
    function getTotalAmount() {
      let totalAmount = 0 
      for (const item in cartItems) {
        if(cartItems[item] > 0 && products) {
          let itemInfo = products.find((product) => product.id === +item)
          totalAmount += itemInfo.price * cartItems[item]
        }
      }
      return totalAmount
    }
    setTotal(getTotalAmount())
  }, [products, cartItems])
  
  return ( 
    <section className={styles.cartItems}>
      <div className={styles.formatMain}>
        <p>Products</p>
        <p className={styles.title}>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p className={styles.totalPrice}>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products && products.filter((product) => cartItems[product.id] > 0)
        .map((product, index) => (
          <div key={index}>
            <div className={styles.format}>
              <img
                src={product.image}
                alt=""
                className={styles.productIcon}
              />
              <p className={styles.productName}>
                {product.title.slice(0, 20)}
              </p>
              <p>${product.price}</p>
              <button className={styles.quantity}>
                {cartItems[product.id]}
              </button>
              <p className={styles.totalPrice}>${product.price * cartItems[product.id]}</p>
              <img
                onClick={() => {removeFromCart(product.id)}}
                src={RemoveIcon}
                alt="Remove Item"
                className={styles.removeIcon}
              />
            </div>
            <hr />
          </div>
      ))}
      <div className={styles.down}>
        <div className={styles.total}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.totalItem}>
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <hr />
            <div className={styles.totalItem}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.totalItem}>
              <h3>Total</h3>
              <h3>${total}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className={styles.promoCode}>
          <p>If you have a promo code, Enter ot here</p>
          <div className={styles.promoBox}>
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartItems
import React, { useContext } from 'react'
import styles from './CartItems.module.css'
import { ShopContext } from '../../Context/ShopContext'
import RemoveIcon from '../../assets/cart_cross_icon.png'

const CartItems = () => {
  const { AllProduct, cartItems, removeFromCart } = useContext(ShopContext)
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    function getTotalAmount() {
      let totalAmount = 0
      for (const item in cartItems) {
        if(cartItems[item] > 0) {
          let itemInfo = AllProduct.find((product) => product.id === +item)
          totalAmount += itemInfo.new_price * cartItems[item]
        }
      }
      return totalAmount
    }
    setTotal(getTotalAmount())
  }, [AllProduct, cartItems])
  
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
      {AllProduct.filter((product) => cartItems[product.id] > 0)
        .map((product, index) => (
          <div key={index}>
            <div className={styles.format}>
              <img
                src={product.image}
                alt=""
                className={styles.productIcon}
              />
              <p className={styles.productName}>
                {product.name}
              </p>
              <p>${product.new_price}</p>
              <button className={styles.quantity}>
                {cartItems[product.id]}
              </button>
              <p className={styles.totalPrice}>${product.new_price * cartItems[product.id]}</p>
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
import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import CartIcon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = React.useState('shop')
  const [cartTotal, setCartTotal] = React.useState(1)
  const { cartItems } = useContext(ShopContext)

  React.useEffect(() => {
    function getTotalCartItems() {
      let totalItem = 0;
      for(const item in cartItems) {
        if(cartItems[item] > 0) {
          totalItem += cartItems[item]
        }
      }
      return totalItem
    }
    setCartTotal(getTotalCartItems())
  }, [cartItems])

  return (
    <section className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={Logo} alt="Shopper" />
        <p>shopper</p>
      </div>
      <nav>
        <ul className={styles.navMenu}>
          <li onClick={() => setMenu('shop')}>
            <Link to='/'>Shop</Link>
            {menu ===  'shop' ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu('mens')}>
            <Link to='mens'>Men</Link>
            {menu ===  'mens' ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu('womens')}>
            <Link to='womens'>Women</Link>
            {menu ===  'womens' ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu('kids')}>
            <Link to='kids'>Kids</Link>
            {menu ===  'kids' ? <hr /> : <></>}
          </li>
        </ul>
      </nav>
      <div className={styles.loginCart}>
        <Link to='login'>
          <button>Login</button>
        </Link>
        <Link to='cart'>
          <img
            className={styles.cartImg}
            src={CartIcon}
            alt="Cart"
          />
        </Link>
        <div className={styles.cartCount}>{cartTotal}</div>
      </div>
    </section>
  )
}

export default Navbar
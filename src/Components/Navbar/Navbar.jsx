import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import CartIcon from '../../assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [cartTotal, setCartTotal] = React.useState(1)
  const [menuMobile, setMenuMobile] = React.useState(false)
  const [showmenu, setShowMenu] = React.useState(false)
  const { pathname } = useLocation()

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
    <div className={styles.navbar}>

      <div className={styles.navLogo}>
        <Link to='/'>
          <img src={Logo} alt="Shopper" />
        </Link>
      </div>
      
      <div className={styles.actions}>
      
        <div className={styles.actionsMenu}>
          <div className={styles.containerBtnMenu} onClick={() => setMenuMobile(!menuMobile)}>
            <button className={styles.btnMenuMobile} ></button>
          </div>
          <nav>
            <ul className={menuMobile ? styles.navMenuMobile : styles.navMenu}>
              <li>
                <Link to='/'>Home</Link>
                {pathname ===  '/' ? <hr /> : <></>}
              </li>
              <li>
                <Link to='mens'>Men</Link>
                {pathname ===  '/mens' ? <hr /> : <></>}
              </li>
              <li>
                <Link to='womens'>Women</Link>
                {pathname ===  '/womens' ? <hr /> : <></>}
              </li>
              <li>
                <Link to='jewelerys'>Jewelerys</Link>
                {pathname ===  '/jewelerys' ? <hr /> : <></>}
              </li>
              <li>
                <Link to='electronics'>Electronics</Link>
                {pathname ===  '/electronics' ? <hr /> : <></>}
              </li>
            </ul>
          </nav>
        </div>
      
        <div className={styles.actionsSignCart}>
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
            <span className={styles.cartCount}>{cartTotal}</span>
          </div>
        </div>
      
      </div>
    
    </div>
  )
}

export default Navbar
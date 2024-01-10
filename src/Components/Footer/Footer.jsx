import React from 'react'
import styles from './Footer.module.css'
import FooterLogo from '../../assets/logo_big.png';
import Instagram from '../../assets/instagram_icon.png'
import Pintester from '../../Assets/pintester_icon.png'
import Whatsapp from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={FooterLogo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className={styles.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.footerSocialIcon}>
        <div className={styles.footerIconsContainer}>
          <img src={Instagram} alt="Instagram" />
        </div>
        <div className={styles.footerIconsContainer}>
          <img src={Pintester} alt="Pintester" />
        </div>
        <div className={styles.footerIconsContainer}>
          <img src={Whatsapp} alt="Whatsapp" />
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
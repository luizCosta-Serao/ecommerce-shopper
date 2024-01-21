import React from 'react'
import styles from './Footer.module.css'
import FooterLogo from '../../assets/logo.svg';
import Instagram from '../../assets/instagram_icon.png'
import Pintester from '../../assets/pintester_icon.png'
import Whatsapp from '../../assets/whatsapp_icon.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={FooterLogo} alt="" />
      </div>
      <ul className={styles.footerLinks}>
        <Link to=''><li>Company</li></Link>
        <Link to=''><li>Products</li></Link>
        <Link to=''><li>Offices</li></Link>
        <Link to=''><li>About</li></Link>
        <Link to=''><li>Contact</li></Link>
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
import React from 'react'
import styles from './Offers.module.css'
import ExclusiveImage from '../../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <section className={styles.offers}>
      <div className={styles.offersLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On Best Sellers Products</p>
        <button>Check Now</button>
      </div>
      <div className={styles.offersRight}>
        <img src={ExclusiveImage} alt="" />
      </div>
    </section>
  )
}

export default Offers
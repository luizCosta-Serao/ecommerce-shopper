import React from 'react'
import styles from './Offers.module.css'
import ExclusiveImage from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <section className={styles.offers}>
      <div className={styles.offersLeft}>
        <h1>Exclusive</h1>
        <p>Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.</p>
        <button>Check Now</button>
      </div>
      <div className={styles.offersRight}>
        <img src={ExclusiveImage} alt="" />
      </div>
    </section>
  )
}

export default Offers
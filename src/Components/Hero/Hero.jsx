import React from 'react'
import styles from './Hero.module.css'
import HandIcon from '../../assets/hand_icon.png'
import ArrowIcon from '../../assets/arrow.png'
import HeroImg from '../../assets/hero_image.png'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h2>Neew Arrivals Only</h2>
        <div>
          <div className={styles.handIcon}>
            <p>new</p>
            <img src={HandIcon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles.latestBtn}>
          <div>Latest Collection</div>
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
      <div className={styles.heroRight}>
        <img src={HeroImg} alt="" />
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import styles from './Hero.module.css'
import HandIcon from '../../assets/hand_icon.png'
import ArrowIcon from '../../assets/arrow.png'
import HeroImg from '../../assets/hero_image.png'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1>Collections</h1>
        <p>you can explore ans shop many different collection from various barands here.</p>
        <button className={styles.latestBtn}>
          Latest Collection
          <img src={ArrowIcon} alt="" />
        </button>
      </div>
      <div className={styles.heroRight}>
        <img src={HeroImg} alt="" />
      </div>
    </section>
  )
}

export default Hero
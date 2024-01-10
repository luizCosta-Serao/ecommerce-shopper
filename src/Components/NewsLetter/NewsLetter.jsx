import React from 'react'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <section className={styles.newsLetter}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </section>
  )
}

export default NewsLetter
import React from 'react'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {

  function handleSubmit(e) {
    e.preventDefault()
  } 

  return (
    <section className={styles.newsLetter}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Your Email id'
        />
        <button>Subscribe</button>
      </form>
    </section>
  )
}

export default NewsLetter
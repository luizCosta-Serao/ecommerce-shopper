import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <section className={styles.containerLoading}>
      <div className={styles.loading}></div>
    </section>
  )
}

export default Loading
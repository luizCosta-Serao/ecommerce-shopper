import React from 'react'
import styles from './BuyAlert.module.css'

const BuyAlert = ({ nameProduct }) => {
  return (
    <div className={styles.buyAlert}>
      {nameProduct} adiconado ao carrinho!
    </div>
  )
}

export default BuyAlert
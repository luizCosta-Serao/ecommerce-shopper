import React from 'react'
import styles from './Breadcrum.module.css'
import ArrowIcon from '../../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const { product } = props
  
  return (
    <section className={styles.breadcrum}>
      HOME <img src={ArrowIcon} alt="" /> SHOP <img src={ArrowIcon} alt="" /> {product.category} <img src={ArrowIcon} alt="" /> {product.name}
    </section>
  )
}

export default Breadcrum
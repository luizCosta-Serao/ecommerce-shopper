import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ img, id, name, newPrice, oldPrice }) => {
  return (
    <section id={id} className={styles.item}>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0, 0)} src={img} alt="" />
      </Link>
      <p>{name}</p>
      <div className={styles.itemPrices}>
        <div className={styles.itemPricesNew}>
          ${newPrice}
        </div>
        <div className={styles.itemPricesOld}>
          ${oldPrice}
        </div>
      </div>
    </section>
  )
}

export default Item
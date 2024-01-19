import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ img, id, name, newPrice, oldPrice }) => {
  return (
    <section id={id} className={styles.item}>
      <Link to={`/product/${id}`}>
        <img className={styles.itemImg} onClick={window.scrollTo(0, 0)} src={img} alt="" />
      </Link>
      <p className={styles.itemName}>{name}</p>
      <span className={styles.itemPrice}>
          ${newPrice}
      </span>
      <p className={styles.itemDescription}>
        {oldPrice}
      </p>
    </section>
  )
}

export default Item
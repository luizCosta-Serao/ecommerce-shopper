import React from 'react'
import styles from './RelatedProducts.module.css'
import DataProduct from '../../assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <section className={styles.relatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles.item}>
        {DataProduct.map((product, index) => (
          <Item
            key={index}
            id={product.id}
            name={product.name}
            img={product.image}
            newPrice={product.new_price}
            oldPrice={product.old_price}
          />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
import React from 'react'
import styles from './Popular.module.css'
import dataProduct from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {

  return (
    <section className={styles.popular}>
      <h1>Popular in Women</h1>
      <hr />
      <div className={styles.popularItem}>
        {dataProduct.map((item, index) => (
          <Item 
            key={index}
            id={item.id}
            name={item.name}
            img={item.image}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
        ))}
      </div>
    </section>
  )
}

export default Popular
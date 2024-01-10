import React from 'react'
import styles from './NewCollections.module.css'
import newCollection from '../../assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <section className={styles.newCollections}>
      <h1>New Collections</h1>
      <hr />
      <div className={styles.collections}>
        {newCollection.map((item, index) => (
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

export default NewCollections
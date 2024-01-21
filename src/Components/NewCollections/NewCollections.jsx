import React from 'react'
import styles from './NewCollections.module.css'
import newCollection from '../../assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=8')
        const json = await response.json()
        setProducts(json)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])


  return (
    <section className={styles.newCollections}>
      <h1>New Collections</h1>
      <hr />
      <div className={styles.collections}>
        {products && products.map((product, index) => (
          <Item
            key={index}
            id={product.id}
            name={product.title.slice(0, 20)}
            img={product.image}
            newPrice={product.price.toFixed(2)}
          />
        ))}
      </div>
    </section>
  )
}

export default NewCollections
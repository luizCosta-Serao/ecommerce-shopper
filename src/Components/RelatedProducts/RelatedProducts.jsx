import React from 'react'
import styles from './RelatedProducts.module.css'
import Item from '../Item/Item'

const RelatedProducts = () => {
  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4')
        const json = await response.json()
        setProducts(json)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className={styles.relatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles.item}>
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

export default RelatedProducts
import React from 'react'
import styles from './NewCollections.module.css'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'

const NewCollections = () => {
  const [products, setProducts] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products?limit=8')
        const json = await response.json()
        setProducts(json)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <Loading />
  if (!products) return null
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
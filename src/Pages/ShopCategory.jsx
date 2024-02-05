import React, { useContext } from 'react'
import styles from './ShopCategory.module.css'
import { ShopContext } from '../Context/ShopContext'
import DropdownIcon from '../assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import Loading from '../Components/Loading/Loading'

const ShopCategory = ({ banner, category }) => {
  const [products, setProducts] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products')
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
    <section className={styles.ShopCategory}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <h1>Flat 50% OFF</h1>
          <p>12 hours 20 mins</p>
        </div>
        <img className={styles.banner} src={banner} alt="" />
      </div>
      <h1 className={styles.category}>{category}s</h1>
      <hr className={styles.categoryStyle} />
      <div className={styles.products}>
        {products && products.filter((product) => product.category.startsWith(category)).map((product, index) => (
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

export default ShopCategory
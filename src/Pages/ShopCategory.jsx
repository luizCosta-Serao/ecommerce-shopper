import React, { useContext } from 'react'
import styles from './ShopCategory.module.css'
import { ShopContext } from '../Context/ShopContext'
import DropdownIcon from '../assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = ({ banner, category }) => {
  const { AllProduct } = useContext(ShopContext)

  return (
    <section className={styles.ShopCategory}>
      <img className={styles.banner} src={banner} alt="" />
      <div className={styles.indexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={styles.sort}>
          Sort by <img src={DropdownIcon} alt="" />
        </div>
      </div>
      <div className={styles.products}>
        {AllProduct.filter((product) => category === product.category).map((product, index) => (
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
      <div className={styles.loadmore}>
          Explore More
      </div>
    </section>
  )
}

export default ShopCategory
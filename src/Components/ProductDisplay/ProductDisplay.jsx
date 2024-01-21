import React, { useContext } from 'react'
import styles from './ProductDisplay.module.css'
import StarIcon from '../../assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext);

  return (
    <section className={styles.productDisplay}>
      <div className={styles.displayLeft}>
        <ul className={styles.imgList}>
          <li><img src={product.image} alt="" /></li>
          <li><img src={product.image} alt="" /></li>
          <li><img src={product.image} alt="" /></li>
          <li><img src={product.image} alt="" /></li>
        </ul>
        <img className={styles.mainImg} src={product.image} alt="" />
      </div>

      <div className={styles.displayRight}>
        <h1>{product.title}</h1>
        <div className={styles.star}>
          <img src={StarIcon} alt="star" />
          <span>{product.rating.rate}</span>
          <p>({product.rating.count})</p>
        </div>
        <p className={styles.price}>$ {product.price.toFixed(2)}</p>
        <p className={styles.description}>
          {product.description}
        </p>
        <div className={styles.size}>
          <h1>Select Size</h1>
          <ul className={styles.sizes}>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XX</li>
          </ul>
        </div>
        <button onClick={() => {addToCart(product.id)}} className={styles.buy}>Add To Cart</button>
        <p className={styles.category}>
          Category: {product.category}
        </p>
      </div>
    </section>
  )
}

export default ProductDisplay
import React, { useContext } from 'react'
import styles from './ProductDisplay.module.css'
import StarIcon from '../../assets/star_icon.png'
import StarDullIcon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext);

  return (
    <section className={styles.productDisplay}>
      <div className={styles.displayLeft}>
        <div className={styles.imgList}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className={styles.img}>
          <img className={styles.mainImg} src={product.image} alt="" />
        </div>
      </div>
      <div className={styles.displayRight}>
        <h1>{product.name}</h1>
        <div className={styles.star}>
          <img src={StarIcon} alt="star" />
          <img src={StarIcon} alt="star" />
          <img src={StarIcon} alt="star" />
          <img src={StarIcon} alt="star" />
          <img src={StarDullIcon} alt="star" />
          <p>(122)</p>
        </div>
        <div className={styles.prices}>
          <div className={styles.priceOld}>
            ${product.old_price}
          </div>
          <div className={styles.priceNew}>
            ${product.new_price}
          </div>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto voluptatum numquam amet dolorum, voluptate quibusdam, velit voluptatem molestiae totam ducimus maxime ipsa dicta eos.
        </div>
        <div className={styles.size}>
          <h1>Select Size</h1>
          <div className={styles.sizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XX</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}} className={styles.buy}>Add To Cart</button>
        <p className={styles.category}>
          <span>Category: </span>
          Women, T-Sgirt, Crop Top
        </p>
        <p className={styles.category}>
          <span>Tags: </span>
          Modern, Latest
        </p>
      </div>
    </section>
  )
}

export default ProductDisplay
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        setProducts(json)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  const { productId } = useParams()
  const product = products ? products.find((product) => product.id === +productId) : null

  if(products)
    return (
      <section>
        <ProductDisplay product={product} />
        <RelatedProducts />
      </section>
    )
  return null
}

export default Product
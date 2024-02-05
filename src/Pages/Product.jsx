import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Loading from '../Components/Loading/Loading';

const Product = () => {
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

  const { productId } = useParams()
  const product = products ? products.find((product) => product.id === +productId) : null

  if (loading) return <Loading />
  if (!products) return null
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
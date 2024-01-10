import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { AllProduct } = useContext(ShopContext);
  const { productId } = useParams()
  const product = AllProduct.find((product) => product.id === +productId)
  
  return (
    <section>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </section>
  )
}

export default Product
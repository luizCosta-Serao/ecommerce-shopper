import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <section>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </section>
  )
}

export default Shop
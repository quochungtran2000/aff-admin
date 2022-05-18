import HeaderShoppping from "./components/HeaderShopping"
import MainLayout from '../../components/layout/MainLayout'
import ProductShopping from "./components/ProductShopping"
import ProductShoppingGrid from "./components/ProductShoppingGrid"
import React from 'react'

export default function Shopping() {
  return (
    <MainLayout>
      <section className='px-20'>     
        <article>
          <HeaderShoppping/>
        </article>   
        <article>
          <ProductShopping/>
        </article>
        <article>
          <ProductShopping/>
        </article>
        <article>
          <ProductShoppingGrid/>
        </article>
     </section>
  </MainLayout>
  )
}

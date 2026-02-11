import React from 'react';
import "./ProductsCartContainer.css";
import ProductCart from '../product-cart/ProductCart';

export default function ProductsCartContainer({products, setProductsTotalSum}) {
  return (
    <section className='products-cart-section'>
      {products ? products.map(product => <ProductCart {...product} setProductsTotalSum = {setProductsTotalSum} key = {product.id}/>):null}
    </section>
  )
}

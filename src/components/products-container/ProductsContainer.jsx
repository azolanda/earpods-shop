import React, {useContext, useState} from 'react';
import "./ProductsContainer.css";
import Product from '../product/Product';
import { TotalQuantityInCartContext } from '../../context';

export default function ProductsContainer({heading, products}) {
  const {totalQuantityInCart, setTotalQuantityInCart} = useContext(TotalQuantityInCartContext);

  return (
    <section className='products-section'>
        <h2 className='heading'>{heading}</h2>
        <div className="products-container">
            {products ? products.map(product => <Product {...product} setTotalQuantityInCart = {setTotalQuantityInCart} key = {product.id}/>):null}
        </div>
    </section>
  )
}

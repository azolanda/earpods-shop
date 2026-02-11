import React, { useMemo } from 'react';
import "./MainIndex.css";
import ProductsContainer from '../products-container/ProductsContainer';
import { products } from '../../data';

export default function MainIndex() {
  const earpods = useMemo(() => products.filter(item => item.category === "earpods"));
  const wireless = useMemo(() => products.filter(item => item.category === "wireless"));
  
  return (
    <main className='main-index center'>
      <ProductsContainer heading="Наушники" products = {earpods}/>
      <ProductsContainer heading="Беспроводные наушники" products = {wireless}/>
    </main>
  )
}

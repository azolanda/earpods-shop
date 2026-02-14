import React, { useMemo } from 'react';
import "./MainIndex.css";
import ProductsContainer from '../products-container/ProductsContainer';
import { products } from '../../data';
import { useTranslation } from 'react-i18next';

export default function MainIndex() {
  const earpods = useMemo(() => products.filter(item => item.category === "earpods"));
  const wireless = useMemo(() => products.filter(item => item.category === "wireless"));
  const { t } = useTranslation();
  
  return (
    <main className='main-index center'>
      <ProductsContainer heading={t("heading1")} products = {earpods}/>
      <ProductsContainer heading={t("heading2")} products = {wireless}/>
    </main>
  )
}

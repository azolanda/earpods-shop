import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import TextContent from '../../components/textContent/TextContent';

export default function ProductPage() {
  return (
    <div className="wrapper">
      <Header />
      <TextContent heading = "Условия сервиса"/>
      <Footer />
    </div>
  )
}
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function ProductPage() {
  return (
    <div className="wrapper">
      <Header />
      <div className="center page__container">
        <h1 className="heading">Страница товара</h1>
      </div>
      <Footer />
    </div>
  );
}

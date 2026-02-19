import React, { useMemo, useState } from "react";
import "./MainCart.css";
import { products } from "../../data";
import ProductsCartContainer from "../ProductsCartContainer/ProductsCartContainer";
import TotalCart from "../total-cart/TotalCart";
import { useTranslation } from "react-i18next";

export default function MainCart() {
  const [productsTotalSum, setProductsTotalSum] = useState({});
  const { t } = useTranslation();

  const cart = useMemo(() => {
    const productsInCart = [];

    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      const product = products.find((item) => item.id == key);
      productsInCart.push({
        ...product,
        quantity: sessionStorage.getItem(key),
      });
    }

    return productsInCart;
  });

  const totalCartSum = () => {
    let totalSum = 0;

    if (Object.keys(productsTotalSum).length === 0) {
      return 0;
    }

    for (let key in productsTotalSum) {
      totalSum += productsTotalSum[key];
    }

    return totalSum;
  };

  return (
    <main className="main-cart center">
      <h1 className="black-heading">{t("cart")}</h1>
      <div className="cart-content">
        <ProductsCartContainer
          products={cart}
          setProductsTotalSum={setProductsTotalSum}
        />
        <TotalCart totalSum={totalCartSum} />
      </div>
    </main>
  );
}

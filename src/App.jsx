import React, { useMemo, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index/Index";
import Cart from "./pages/cart/Cart";
import TermsOfService from "./pages/terms-of-service/TermsOfService";
import Contacts from "./pages/contacts/Contacts";
import "./App.css";
import ProductPage from "./pages/product-page/ProductPage";
import { TotalQuantityInCartContext } from "./context";

export default function App() {
  const totalQuantityInStorage = useMemo(() => {
    let totalQuantity = 0;
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      totalQuantity += +sessionStorage.getItem(key);
    }
    return totalQuantity;
  });

  const [totalQuantityInCart, setTotalQuantityInCart] = useState(
    totalQuantityInStorage,
  );

  return (
    <TotalQuantityInCartContext.Provider
      value={{ totalQuantityInCart, setTotalQuantityInCart }}
    >
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/*" element={<Index />} />
        </Routes>
      </HashRouter>
    </TotalQuantityInCartContext.Provider>
  );
}

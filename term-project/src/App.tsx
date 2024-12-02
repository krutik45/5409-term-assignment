import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/product-list/ProductListHtml";
import Cart from "./components/cart/CartHtml";
import Checkout from "./components/checkout/CheckoutHtml";
import Home from "./components/home/HomeHtml";
import Product from "./components/product/ProductHtml";
import Contact from "./components/contact/ContactHtml";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

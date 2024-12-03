import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/product-list/ProductListHtml";
import Cart from "./components/cart/CartHtml";
import Checkout from "./components/checkout/CheckoutHtml";
import Home from "./components/home/HomeHtml";
import Product from "./components/product/ProductDetail";
import Contact from "./components/contact/ContactHtml";
import NavBar from "./components/Navbar/NavbarHtml";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import ProductDetail from "./components/product/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

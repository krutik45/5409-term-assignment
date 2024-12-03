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
import AddHotel from "./components/AddHotel/AddHotel";
import Reviews from "./components/reviews/Reviews";
import SendReviewRequest from "./components/SendReviewRequest/SendReviewRequest";
import FeedbackForm from "./components/Feedback/FeedbackForm";
import AddBooking from "./components/CreateBooking/AddBooking";
import Hotels from "./components/Hotel/Hotels";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addhotel" element={<AddHotel />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sendreview" element={<SendReviewRequest />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/addbooking" element={<AddBooking />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

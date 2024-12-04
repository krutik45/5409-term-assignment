import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/index";
import axios from "axios";

const Checkout = () => {
  const numofItems = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const orderData = {
      items: numofItems,
    };

    const payload = {
      ...formData,
      Email: formData.email,
      orderData: orderData,
    };

    const { REACT_APP_API_ENDPOINT } = process.env;
    console.log("REACT_APP_API_ENDPOINT", REACT_APP_API_ENDPOINT);
    try {
      const response = await axios.post(
        `${REACT_APP_API_ENDPOINT}/order`,
        JSON.stringify(payload)
      );
      console.log(response.data);
      dispatch(clearCart());
      navigate.push("/");
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  var cartTotal = 0;
  const itemList = (cartItem) => {
    const price = parseFloat(cartItem.Price.replace("$", ""));
    cartTotal = cartTotal + price;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center shadow-sm">
        <div>
          <h6 className="my-0">{cartItem.Title}</h6>
        </div>
        <span className="text-muted">{cartItem.Price}</span>
      </li>
    );
  };

  return (
    <div className="container my-5">
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <h4 className="mb-0">Your Cart</h4>
            </div>
            <div className="card-body">
              <ul className="list-group mb-3">
                {numofItems.map(itemList)}

                <li className="list-group-item d-flex justify-content-between">
                  <span>
                    <strong>Total</strong>
                  </span>
                  <strong>${cartTotal}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing Address</h4>
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="1234 Main St"
                  required
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choose</option>
                  <option>Canada</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option>Halifax</option>
                </select>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  placeholder=""
                  required
                />
              </div>
            </div>

            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

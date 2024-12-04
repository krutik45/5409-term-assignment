import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const itemsIn = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="col-md-6 col-lg-4 my-4" key={cartItem.id}>
        <div className="card shadow-sm rounded">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
          ></button>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <img
                  src={cartItem.img}
                  alt={cartItem.Title}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-8">
                <h5 className="card-title">{cartItem.Title}</h5>
                <p className="card-text fw-bold">{cartItem.Price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="py-5 text-center">
        <h2 className="text-muted">Your cart is empty!</h2>
        <p className="lead">Add items to your cart to proceed.</p>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary w-50 mx-auto py-2 rounded-pill shadow-sm"
          >
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-5">
      {itemsIn.length === 0 ? (
        emptyCart()
      ) : (
        <>
          <div className="row">{itemsIn.map(cartItems)}</div>
          {button()}
        </>
      )}
    </div>
  );
};

export default Cart;

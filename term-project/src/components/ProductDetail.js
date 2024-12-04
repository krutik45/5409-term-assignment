import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import axios from "axios";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [item, setItem] = useState();
  const { id } = useParams();
  const [data, setData] = useState();
  const { REACT_APP_API_ENDPOINT } = process.env;
  console.log("in details");
  useEffect(() => {
    axios
      .get(`${REACT_APP_API_ENDPOINT}/items`)
      .then((response) => {
        setData(response.data);
        const it = response.data.find((item) => item.id === String(id));
        console.log(it);
        setItem(it);
        // const it = data.find(item => item.id === pid)
        // console.log(it)
        // setItem(data.find(item => item.id === pid));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  const dispatch = useDispatch();

  const handleCart = (item) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(item));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(item));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      {item ? (
        <div className="container my-5 py-3">
          <div className="column">
            <div className="col-md-6 mx-auto item">
              <img src={item.img} alt={item.Title} height="400px" />
            </div>
            <div className="col-md-6 ">
              <h1 className="display-5">{item.Title}</h1>
              <h2 className="my-2">{item.Price}</h2>
              <button
                onClick={() => handleCart(item)}
                className="btn btn-outline-primary my-5"
              >
                {cartBtn}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [items, setItems] = useState([]);
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://t1vjqgqapl.execute-api.us-east-1.amazonaws.com/prod/items`
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const cardItem = (prd) => {
    return (
      <div className="col-md-4 col-sm-6" key={prd.id}>
        <div
          className="card product-card shadow-sm mb-4 rounded"
          style={styles.card}
        >
          <img
            src={prd.img}
            className="card-img-top"
            alt={prd.Title}
            style={styles.cardImage}
          />
          <div className="card-body text-center">
            <h5 className="card-title" style={styles.cardTitle}>
              {prd.Title}
            </h5>
            <p className="card-text" style={styles.cardPrice}>
              {prd.Price}
            </p>
            <NavLink
              to={`/products/${prd.id}`}
              className="btn btn-primary w-100"
              style={styles.button}
            >
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="product-container" style={styles.container}>
      <div className="container py-5">
        <h2 className="text-center mb-4" style={styles.heading}>
          Our Featured Products
        </h2>
        <div className="row">{items.map(cardItem)}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f8f9fa", // Light background for the section
    padding: "20px",
  },
  card: {
    border: "none",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardImage: {
    objectFit: "cover",
    height: "200px", // Uniform image size
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#333",
  },
  cardPrice: {
    fontSize: "1rem",
    color: "#888",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
    color: "white",
    border: "none",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    borderColor: "#0056b3",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#333",
  },
};

export default Product;

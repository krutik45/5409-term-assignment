import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div style={styles.container}>
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {carouselImages.map((imgSrc, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={imgSrc}
                  className="d-block w-100"
                  alt={`Laptop ${index + 1}`}
                  style={styles.carouselImage}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="prev"
            style={styles.carouselControl}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="next"
            style={styles.carouselControl}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div style={styles.productSection}>
          <Product />
        </div>
      </div>
    </>
  );
};

const carouselImages = [
  "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
  "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
  "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
  "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
];

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    paddingTop: "20px",
  },
  carouselImage: {
    objectFit: "cover",
    height: "400px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  carouselControl: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "50%",
    padding: "10px",
  },
  productSection: {
    marginTop: "30px",
    padding: "20px",
  },
};

export default Home;

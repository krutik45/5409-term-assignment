import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div style={styles.container}>
        {/* Carousel Section */}
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Carousel Items */}
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
          {/* Carousel Controls */}
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

        {/* Product Section */}
        <div style={styles.productSection}>
          <Product />
        </div>
      </div>
    </>
  );
};

// Sample carousel images array
const carouselImages = [
  "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
  "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
  "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
  "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
];

// Styles for the component
const styles = {
  container: {
    backgroundColor: "#f5f5f5", // Soft background color
    paddingTop: "20px",
  },
  carouselImage: {
    objectFit: "cover", // Ensures images cover the area without distortion
    height: "400px", // Uniform height for the images
    borderRadius: "8px", // Rounded corners
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for a modern effect
  },
  carouselControl: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent background for controls
    borderRadius: "50%", // Round control buttons
    padding: "10px", // Padding to make controls more prominent
  },
  productSection: {
    marginTop: "30px",
    padding: "20px",
  },
};

export default Home;

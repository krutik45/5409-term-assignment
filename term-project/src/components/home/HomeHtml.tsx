import React from "react";
import { useNavigate } from "react-router-dom";
import { CircularArrayContainer, HeroSection, InfoSection } from "./HomeStyles";

const HomeHtml: React.FC = () => {
  const navigate = useNavigate();

  const images = [
    "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L1.jpg",
    "https://term-project-5409.s3.us-east-1.amazonaws.com/phones/p1.jpg",
    "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
    "https://term-project-5409.s3.us-east-1.amazonaws.com/phones/p2.jpg",
  ];

  const handleShopNowClick = () => {
    navigate("/login");
  };

  return (
    <>
      <HeroSection>
        <h1>Welcome to Bikayi</h1>
        <p>
          Your one-stop shop for premium laptops and phones at unbeatable
          prices!
        </p>
        <button className="cta-btn" onClick={handleShopNowClick}>
          Shop Now
        </button>
      </HeroSection>

      <CircularArrayContainer>
        <div className="image-slider">
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
          {images.slice(0, 2).map((image, index) => (
            <div className="slide" key={`duplicate-${index}`}>
              <img src={image} alt={`Duplicate Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </CircularArrayContainer>

      <InfoSection>
        <h2>Why Choose Bikayi?</h2>
        <div className="features">
          <div className="feature">
            <h3>Premium Quality</h3>
            <p>
              We offer only the best brands with top-notch quality assurance.
            </p>
          </div>
          <div className="feature">
            <h3>Best Prices</h3>
            <p>
              Shop with confidence knowing you're getting the best prices in the
              market.
            </p>
          </div>
          <div className="feature">
            <h3>Fast Delivery</h3>
            <p>Enjoy quick and reliable delivery straight to your doorstep.</p>
          </div>
        </div>
      </InfoSection>
    </>
  );
};

export default HomeHtml;

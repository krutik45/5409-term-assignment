import React from "react";
import Navbar from "../Navbar/NavbarHtml";
import { CircularArrayContainer } from "./HomeStyles";

const HomeHtml: React.FC = () => {
  const images = [
    "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L1.jpg",
    "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
    "https://term-project-5409.s3.us-east-1.amazonaws.com/phones/p1.jpg",
    "https://term-project-5409.s3.us-east-1.amazonaws.com/phones/p2.jpg",
  ];

  return (
    <>
      <Navbar />
      {/* <CircularArrayContainer>
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
      </CircularArrayContainer> */}
    </>
  );
};

export default HomeHtml;

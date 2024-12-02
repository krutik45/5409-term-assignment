import styled, { keyframes } from "styled-components";

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const CircularArrayContainer = styled.div`
  overflow: hidden; /* Hide overflow content */
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Add space at the top */

  .image-slider {
    display: flex;
    gap: 20px;
    animation: ${slide} 10s linear infinite; /* Smooth infinite animation */
  }

  .slide {
    flex-shrink: 0;
    width: 300px; /* Adjust image size */
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }
`;

export const HeroSection = styled.section`
  background-color: #f8f9fa;
  text-align: center;
  padding: 60px 20px;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
  }

  .cta-btn {
    background-color: #007bff;
    color: white;
    padding: 12px 30px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const InfoSection = styled.section`
  text-align: center;
  margin: 50px 0;
  padding: 0 20px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 30px;
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    text-align: left;

    .feature {
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      h3 {
        font-size: 1.5rem;
        color: #007bff;
        margin-bottom: 10px;
      }

      p {
        color: #555;
        font-size: 1rem;
      }
    }
  }
`;

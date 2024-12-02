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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
  }
`;

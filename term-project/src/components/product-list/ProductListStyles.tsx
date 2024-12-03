import styled from "styled-components";

// Container for the entire product list
export const ProductContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

// Grid for displaying product cards
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* Grid with flexible card sizes */
  gap: 20px; /* Spacing between cards */
  justify-items: center; /* Center the grid items */
`;

// Styling for each product card
export const ProductCard = styled.div`
  width: 100%;
  max-width: 250px; /* Ensure a maximum size */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 15px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  img {
    width: 100%;
    height: 200px; /* Fixed height for the image */
    object-fit: cover;
    border-radius: 5px;
  }
`;

// Info section within each product card
export const ProductInfo = styled.div`
  text-align: center;
  margin-top: 10px;

  h3 {
    font-size: 18px;
    margin: 10px 0;
    color: #333;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    color: #f39c12;
    margin-bottom: 10px;
  }

  .rating {
    font-size: 16px;
    color: #f39c12;
    margin-bottom: 10px;
  }

  .cta-btn {
    background-color: #3498db;
    color: white;
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductImage = styled.div`
  width: 45%;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductDetails = styled.div`
  width: 50%;
  padding-left: 20px;

  h2 {
    font-size: 32px;
    margin-bottom: 16px;
    color: #333;
  }

  .price {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #f39c12;
  }

  .rating {
    margin-bottom: 20px;
    font-size: 18px;
    color: #f39c12;
    strong {
      font-size: 20px;
      color: #333;
    }
  }

  .description {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.6;
    color: #555;

    span {
      font-weight: bold;
    }
  }

  .cta-btn {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

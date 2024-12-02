import styled from "styled-components";

export const ProductContainer = styled.div`
  padding: 40px;
  background-color: #f9f9f9;

  h2 {
    text-align: center;
    font-size: 28px;
    color: #333;
    margin-bottom: 30px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-items: center;
  }
`;

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }
`;

export const ProductInfo = styled.div`
  padding: 20px;

  h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }

  .price {
    font-size: 18px;
    color: #007bff;
    margin-bottom: 10px;
  }

  .rating {
    margin-bottom: 15px;
    color: #ffcc00;

    .star {
      font-size: 18px;
      margin-right: 5px;
    }

    .filled {
      color: #ff9900;
    }
  }

  .cta-btn {
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

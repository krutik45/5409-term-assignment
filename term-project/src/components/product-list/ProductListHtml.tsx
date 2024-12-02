import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductContainer, ProductCard, ProductInfo } from "./ProductListStyles";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Laptop A",
    price: 799.99,
    rating: 4.5,
    imageUrl:
      "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L1.jpg",
  },
  {
    id: "2",
    name: "Phone B",
    price: 499.99,
    rating: 4.0,
    imageUrl:
      "https://term-project-5409.s3.us-east-1.amazonaws.com/phones/p1.jpg",
  },
  {
    id: "3",
    name: "Laptop C",
    price: 1099.99,
    rating: 5.0,
    imageUrl:
      "https://term-project-5409.s3.us-east-1.amazonaws.com/laptops/L2.jpg",
  },
  {
    id: "4",
    name: "Phone D",
    price: 649.99,
    rating: 4.2,
    imageUrl:
      "https://term-project-5409.s3.us-east-1.amazonaws.com/phones/p2.jpg",
  },
];

const ProductList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ProductContainer>
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <ProductInfo>
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`star ${
                      index < Math.floor(product.rating) ? "filled" : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button
                className="cta-btn"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                View Details
              </button>
            </ProductInfo>
          </ProductCard>
        ))}
      </div>
    </ProductContainer>
  );
};

export default ProductList;

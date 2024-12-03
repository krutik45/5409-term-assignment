import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductContainer,
  ProductCard,
  ProductInfo,
  ProductGrid, // Now using grid for the layout
} from "./ProductListStyles";

interface Product {
  id: string;
  name: string;
  price: number;
  review: number; // Rating as a number (not rounded)
  image: string;
}

const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://z1ef52yst0.execute-api.us-east-1.amazonaws.com/prod/getProducts"
        );
        const data = await response.json();
        if (response.ok) {
          const productsData = JSON.parse(data.body);
          setProducts(productsData);
        } else {
          setError("Failed to fetch products");
        }
      } catch (error) {
        setError("Error occurred while fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProductContainer>
      <h2>Our Products</h2>
      {/* Use the new grid layout */}
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <ProductInfo>
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>

              {/* Display Rating as a Fraction */}
              <div className="rating">
                <strong>{product.review.toFixed(1)} / 5</strong>
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
      </ProductGrid>
    </ProductContainer>
  );
};

export default ProductList;

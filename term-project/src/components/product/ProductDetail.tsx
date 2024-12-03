import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ProductDetailContainer,
  ProductImage,
  ProductDetails,
} from "./ProductDetailStyles";

interface Product {
  id: string;
  name: string;
  price: number;
  review: number; // Allowing float review
  image: string;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;

      try {
        const response = await fetch(
          "https://f3eqyc1by5.execute-api.us-east-1.amazonaws.com/prod/getSingleProduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: productId,
            }),
          }
        );

        const data = await response.json();
        console.log("data in details", data);
        if (data.statusCode === 200) {
          const productData = JSON.parse(data.body);
          setProduct(productData);
        } else {
          setError("Failed to fetch product details");
        }
      } catch (error) {
        setError("Error occurred while fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductDetailContainer>
      <ProductImage>
        <img src={product.image} alt={product.name} />
      </ProductImage>

      <ProductDetails>
        <h2>{product.name}</h2>

        <div className="price">
          <span>Price:</span> <strong>${product.price.toFixed(2)}</strong>
        </div>

        <div className="rating">
          <span>Rating:</span>
          <strong>{product.review.toFixed(1)} / 5</strong>
        </div>

        <div className="description">
          <span>Description:</span>
          <p>{product.description}</p>
        </div>

        <button onClick={() => navigate("/products")} className="cta-btn">
          Go Back
        </button>
      </ProductDetails>
    </ProductDetailContainer>
  );
};

export default ProductDetail;

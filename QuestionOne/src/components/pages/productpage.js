import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState(null);
  const productId = match.params.id;

  useEffect(() => {
    // Fetch product data from the API
    axios.get(http://20.244.56.144/test/products/${productId})
      .then(response => setProduct(response.data.product))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
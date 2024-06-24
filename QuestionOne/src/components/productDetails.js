import React from 'react';

const ProductDetails = ({ product }) => (
  <div className="product-details">
    <img src={https://picsum.photos/400?random=${product.id}} alt={product.name} />
    <h1>{product.name}</h1>
    <p>Company: {product.company}</p>
    <p>Category: {product.category}</p>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating}</p>
    <p>Discount: {product.discount}%</p>
    <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
  </div>
);

export default ProductDetails;
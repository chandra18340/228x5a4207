import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    availability: '',
  });

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://20.244.56.144/test/products')
      .then(response => {
        const uniqueProducts = response.data.products.map((product, index) => ({
          ...product,
          id: index + 1 // Generate unique ID
        }));
        setProducts(uniqueProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(product => {
    return (
      (filters.category ? product.category === filters.category : true) &&
      (filters.company ? product.company === filters.company : true) &&
      (filters.minPrice ? product.price >= filters.minPrice : true) &&
      (filters.maxPrice ? product.price <= filters.maxPrice : true) &&
      (filters.minRating ? product.rating >= filters.minRating : true) &&
      (filters.availability ? product.availability === (filters.availability === 'inStock') : true)
    );
  });

  return (
    <div className="all-products-page">
      <Filters filters={filters} setFilters={setFilters} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
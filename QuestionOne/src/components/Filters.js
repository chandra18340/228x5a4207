import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filters">
      <select name="category" onChange={handleChange} value={filters.category}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
      </select>
      <select name="company" onChange={handleChange} value={filters.company}>
        <option value="">All Companies</option>
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
        <option value="company3">Company 3</option>
      </select>
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        onChange={handleChange}
        value={filters.minPrice}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        onChange={handleChange}
        value={filters.maxPrice}
      />
      <input
        type="number"
        name="minRating"
        placeholder="Min Rating"
        onChange={handleChange}
        value={filters.minRating}
      />
      <select name="availability" onChange={handleChange} value={filters.availability}>
        <option value="">All</option>
        <option value="inStock">In Stock</option>
        <option value="outOfStock">Out of Stock</option>
      </select>
    </div>
  );
};

export default Filters;
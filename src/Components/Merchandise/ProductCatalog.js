import React, { useState } from 'react';
import './ProductCatalog.css';

const ProductCatalog = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    brand: '',
    priceRange: '',
    discount: '',
  });

  const handleFilterChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: e.target.value,
    });
  };

  const products = [
    { id: 1, name: 'Product 1', price: '₹1,299', image: 'https://via.placeholder.com/300', brand: 'Brand A', discount: '10%' },
    { id: 2, name: 'Product 2', price: '₹899', image: 'https://via.placeholder.com/300', brand: 'Brand B', discount: '20%' },
    { id: 3, name: 'Product 3', price: '₹1,499', image: 'https://via.placeholder.com/300', brand: 'Brand A', discount: '15%' },
    { id: 4, name: 'Product 4', price: '₹1,999', image: 'https://via.placeholder.com/300', brand: 'Brand C', discount: '25%' },
    { id: 5, name: 'Product 5', price: '₹2,299', image: 'https://via.placeholder.com/300', brand: 'Brand D', discount: '30%' },
    { id: 6, name: 'Product 6', price: '₹3,499', image: 'https://via.placeholder.com/300', brand: 'Brand E', discount: '35%' },
  ];

  const filteredProducts = products.filter((product) => {
    return (
      (!selectedFilters.category || product.name.includes(selectedFilters.category)) &&
      (!selectedFilters.brand || product.brand === selectedFilters.brand) &&
      (!selectedFilters.priceRange || parseInt(product.price.replace('₹', '')) <= parseInt(selectedFilters.priceRange)) &&
      (!selectedFilters.discount || product.discount === selectedFilters.discount)
    );
  });

  return (
    <div className="catalog-container">
      {/* Sidebar for Filters */}
      <aside className="sidebar">
        <h3>Filters</h3>
        <div className="filter-group">
          <h5>Category</h5>
          <select name="category" value={selectedFilters.category} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Product 1">Category 1</option>
            <option value="Product 2">Category 2</option>
            <option value="Product 3">Category 3</option>
          </select>
        </div>
        <div className="filter-group">
          <h5>Brand</h5>
          <select name="brand" value={selectedFilters.brand} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
            <option value="Brand D">Brand D</option>
            <option value="Brand E">Brand E</option>
          </select>
        </div>
        <div className="filter-group">
          <h5>Price Range</h5>
          <select name="priceRange" value={selectedFilters.priceRange} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="1000">Below ₹1,000</option>
            <option value="1500">Below ₹1,500</option>
            <option value="2000">Below ₹2,000</option>
            <option value="3000">Below ₹3,000</option>
          </select>
        </div>
        <div className="filter-group">
          <h5>Discount</h5>
          <select name="discount" value={selectedFilters.discount} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="10%">10% and above</option>
            <option value="20%">20% and above</option>
            <option value="30%">30% and above</option>
          </select>
        </div>
      </aside>

      {/* Product Catalog */}
      <section className="product-catalog">
        <h2>Product Catalog</h2>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <p className="price">{product.price}</p>
              <p className="brand">{product.brand}</p>
              <p className="discount">{product.discount} off</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default ProductCatalog;

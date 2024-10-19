import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Wishlist from './merchWishlist';
import Cart from './cart';  // Import the Cart component
import './Css/merchandise.css'
import Header from '../LandingPage/Header';

// Sample product data
const products = [
  { id: 1, name: 'T-Shirt', price: 20, category: 'Clothing', image: 'tshirt.jpg' },
  { id: 2, name: 'Hoodie', price: 50, category: 'Clothing', image: 'hoodie.jpg' },
  { id: 3, name: 'Mug', price: 10, category: 'Accessories', image: 'mug.jpg' },
  { id: 4, name: 'Cap', price: 15, category: 'Accessories', image: 'cap.jpg' },
  { id: 1, name: 'T-Shirt', price: 20, category: 'Clothing', image: 'tshirt.jpg' },
  { id: 2, name: 'Hoodie', price: 50, category: 'Clothing', image: 'hoodie.jpg' },
  { id: 3, name: 'Mug', price: 10, category: 'Accessories', image: 'mug.jpg' },
  { id: 4, name: 'Cap', price: 15, category: 'Accessories', image: 'cap.jpg' },
  { id: 1, name: 'T-Shirt', price: 20, category: 'Clothing', image: 'tshirt.jpg' },
  { id: 2, name: 'Hoodie', price: 50, category: 'Clothing', image: 'hoodie.jpg' },
 
];

const Merchandise = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState([0, 100]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Filter products based on search term, category, and price range
  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === '' || product.category === categoryFilter) &&
      product.price >= priceFilter[0] &&
      product.price <= priceFilter[1]
    );
  });

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  // Toggle wishlist
  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter(item => item.id !== product.id));
  };

  return (
    <>
    <Header/>
    <div className="product-search-container">
      <div className="sidebar">
        <h3>Filters</h3>
        <div>
          <h4>Category</h4>
          <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div>
          <h4>Price Range</h4>
          <input
            type="number"
            value={priceFilter[0]}
            onChange={(e) => setPriceFilter([+e.target.value, priceFilter[1]])}
            placeholder="Min"
          />
          <input
            type="number"
            value={priceFilter[1]}
            onChange={(e) => setPriceFilter([priceFilter[0], +e.target.value])}
            placeholder="Max"
          />
        </div>
      </div>
      <div className="main-content">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
        <Cart cart={cart} removeFromCart={removeFromCart} /> {/* Add the Cart component */}
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  {cart.find(item => item.id === product.id) ? (
                    <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
                  ) : (
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  )}
                  <div 
                    className="wishlist-icon" 
                    onClick={() => toggleWishlist(product)}
                  >
                    {wishlist.find(item => item.id === product.id) ? (
                      <FaHeart color="red" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Merchandise;

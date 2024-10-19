import React, { useState } from 'react';
import './Css/ProductPage.css'; // Ensure you create this CSS file to style the page

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-page-container">
      {/* Product Image Section */}
      <div className="image-section">
        <div className="main-image">
          <img src="https://voilastudio.in/old_website_assets/images/VMM3/ANMOL%20RELUME%20DREAMS%20-2%20(1).webp" alt="Product" />
        </div>
        <div className="image-thumbnails">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVJu5Aq9iOzChlSlsa9wGQYoB8xvGTl3FIMJu3I6s7N_AC1aTASjnl3fbNEJILCVemHI&usqp=CAU" alt="Thumbnail 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5JCZVOuBH_HTq0FUbCeTFf9gCNH241PYZazL-XGioH5HwlyvTW4eD_ziyj7OxjAYK6E&usqp=CAU" alt="Thumbnail 2" />
          <img src="https://voilastudio.in/old_website_assets/images/VMM7/Picture17_wp.jpg" alt="Thumbnail 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5JCZVOuBH_HTq0FUbCeTFf9gCNH241PYZazL-XGioH5HwlyvTW4eD_ziyj7OxjAYK6E&usqp=CAU" alt="Thumbnail 4" />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="details-section">
        <h1 className="product-title">Rare Rabbit Men Haussman Off-White Grey Slim Fit Printed Shirt</h1>
        <p className="product-brand">Brand: Rare Rabbit</p>
        <p className="product-price">₹2,399 <span className="original-price">₹3,999</span> <span className="discount">(40% OFF)</span></p>
        <div className="size-selection">
          <h3>Select Size</h3>
          <div className="size-options">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="size-guide">SIZE GUIDE</p>
        </div>

        <div className="action-buttons">
          <button className="add-to-bag-button">ADD TO BAG</button>
          <button className="wishlist-button">WISHLIST</button>
        </div>

        <div className="delivery-section">
          <h3>Delivery Options</h3>
          <input type="text" placeholder="Enter Pincode" className="pincode-input" />
          <button className="check-button">Check</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

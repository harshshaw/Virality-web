import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './Css/merchWishList.css'

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map(product => (
          <div key={product.id} className="wishlist-item">
            <img src={product.image} alt={product.name} />
            <div className="wishlist-details">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => removeFromWishlist(product)}>
                <FaTrashAlt /> Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './onlineStore.css';
import StoreNavbar from './storeNavbar';
import Carousel from './Carousel';
import BrandSection from './BrandSection';

function OnlineStore() {
  return (
    <div className="myntra-landing-page">
      <StoreNavbar />
      <Carousel />
      <BrandSection />
      {/* Categories Section */}
      <div className="categories-section container mt-5">
        <h2>GRAND GLOBAL BRANDS</h2>
        
      </div>

      {/* Promotional Banners */}
      <div className="promotional-banners container mt-5">
        <div className="row">
          <div className="col-12">
            <img src="https://via.placeholder.com/1200x300" alt="Promo Banner" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section bg-dark text-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>About Us</h5>
              <p>Learn more about Myntra, our journey, and the values we stand by.</p>
            </div>
            <div className="col-md-3">
              <h5>Customer Care</h5>
              <ul className="list-unstyled">
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Returns & Refunds</a></li>
                <li><a href="/">Shipping Information</a></li>
                <li><a href="/">FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <div className="social-links">
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-md-3">
              <h5>Subscribe</h5>
              <p>Get the latest updates and offers.</p>
              <form className="form-inline">
                <div className="form-group mb-2">
                  <input type="email" className="form-control" placeholder="Your email" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
              </form>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 text-center">
              <p>&copy; 2024 Myntra. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OnlineStore;

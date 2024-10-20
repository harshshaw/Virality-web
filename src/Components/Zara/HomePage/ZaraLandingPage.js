import React, { useState } from 'react';
import styles from './ZaraLandingPage.module.css';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import FloatingButtons from '../../FloatingFeatures/FloatingButtons';

const ZaraLandingPage = () => {

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <Header />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/7/888/904/zara-axeronias-model-women-face-wallpaper-preview.jpg" // Replace with an appropriate hero image URL
          alt="Zara Collection"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1>Fall Winter Collection 2024</h1>
          <button className={styles.shopButton}>Shop Now</button>
        </div>
      </section>

      {/* Category Section */}
      <section className={styles.categorySection}>
        <div className={styles.category}>
          <img
            src="https://www.shutterstock.com/image-photo/beautiful-brunette-woman-natural-makeup-600nw-1781009285.jpg" // Replace with category image URLs
            alt="Woman"
          />
          <div className={styles.categoryText}>
            <h2>Woman</h2>
            <button>Explore</button>
          </div>
        </div>
        <div className={styles.category}>
          <img
            src="https://www.shutterstock.com/image-photo/beautiful-brunette-woman-natural-makeup-600nw-1781009285.jpg" // Replace with category image URLs
            alt="Man"
          />
          <div className={styles.categoryText}>
            <h2>Man</h2>
            <button>Explore</button>
          </div>
        </div>
        <div className={styles.category}>
          <img
            src="https://media.istockphoto.com/id/1018293976/photo/attractive-fashionable-woman-posing-in-white-trendy-sweater-beige-pants-and-autumn-heels-on.jpg?s=612x612&w=0&k=20&c=_CLawpZw6l9z0uV4Uon-7lqaS013E853ub883pkIK3c="
            alt="Kids"
          />
          <div className={styles.categoryText}>
            <h2>Kids</h2>
            <button>Explore</button>
          </div>
        </div>
      </section>

      {/* Cards Section with Videos */}
      <section className={styles.cardSection}>
        <h2 className={styles.cardSectionTitle}>Latest Trends</h2>
        <div className={styles.cardContainer}>
          {[1, 2, 3, 4, 5].map((card, index) => (
            <div key={index} className={styles.card}>
              <video
                src={`https://videos.ctfassets.net/wl6q2in9o7k3/7f3bkmH9ZFwffDef03bXIu/d67b4312d65d320d1bea0a0f765eb91e/LEGGINGS_PLP_-_CLASSES_CARD_4x5.mp4`} // Replace with actual video URL
                controls
                className={styles.cardVideo}
              />
              <div className={styles.cardContent}>
                <h3>Card Title {card}</h3>
                <p>Short description for video {card}.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FloatingButtons />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ZaraLandingPage;

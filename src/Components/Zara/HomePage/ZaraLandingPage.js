import React, { useState } from 'react';
import styles from './ZaraLandingPage.module.css';

const ZaraLandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>MAA TARA </div>
        <div className={styles.menu} onClick={toggleMenu}>
          <span className={styles.menuIcon}>&#9776;</span>
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li>WOMAN</li>
          <li>MAN</li>
          <li>KIDS</li>
          <li>JOIN LIFE</li>
        </ul>
      </nav>

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
            src="https://img.freepik.com/free-photo/model-wearing-beautiful-shade-clothing_23-2151428029.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1729296000&semt=ais_hybrid"
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

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Zara. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ZaraLandingPage;

import React, { useState } from 'react';
import styles from './ZaraLandingPage.module.css';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';

const ZaraLandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
<<<<<<< HEAD
        <BurgerMenu />
        <div className={styles.logo}>MAA TARA </div>
=======
        <div className={styles.logo}>ZARA</div>
>>>>>>> 10b4d1bb6ffd1d4910324bd1a50d808f3500d089
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

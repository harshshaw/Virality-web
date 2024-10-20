import { useState, React } from "react";
import styles from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <BurgerMenu />
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
    );
}

export default Header;
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  console.log(getImageUrl("nav/menuIcon.png"));
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img src="../../assets/nav/menuIcon.png" alt="menu-icon" />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Exaperience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

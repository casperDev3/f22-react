import React from "react";
import { Link } from "react-router-dom";
// import cutom style
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">Logo</Link>
        <nav>
          <ul className={styles.header__menu}>
            <li>
              <Link to="/converter">Converter</Link>
            </li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

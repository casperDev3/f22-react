import React from "react";
// import cutom style
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <div>LOGO</div>
        <nav>
          <ul className={styles.header__menu}>
            <li>test</li>
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

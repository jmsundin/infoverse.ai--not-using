import React from "react";
import "../assets/NavMenu.css";

const NavMenu = () => {
  return (
    <header className="main-header">
      <div className="main-header__logo">
        <a href="index.html" alt="Infoverse AI">
          Infoverse AI
        </a>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="index.html" alt="Home">
              Home
            </a>
          </li>
          <li className="main-nav__item">
            <a href="About.html" alt="About">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;

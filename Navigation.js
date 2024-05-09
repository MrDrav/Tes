import React, { useState } from "react";
import "../styles.css";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>
      <div className={`nav ${isActive ? "nav-active" : ""}`}>
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item">Home</li>
            <li className="nav__list-item">About</li>
            <li className="nav__list-item">Projects</li>
            <li className="nav__list-item">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

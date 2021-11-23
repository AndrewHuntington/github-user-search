import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import moon from "../assets/icon-moon.svg";
import "./Header.css";

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="Header">
      <h1 className="Header-title">devfinder</h1>
      <div className="Header-toggle" onClick={toggleTheme}>
        <span>DARK</span>
        <img src={moon} alt="moon" />
      </div>
    </header>
  );
}

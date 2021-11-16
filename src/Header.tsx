import moon from "./assets/icon-moon.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <h1 className="Header-title">devfinder</h1>
      <div className="Header-toggle">
        <span>DARK</span>
        <img src={moon} alt="moon" />
      </div>
    </header>
  );
}

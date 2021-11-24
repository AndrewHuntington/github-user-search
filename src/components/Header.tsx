import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import "./Header.css";

type HeaderProps = {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
};

export default function Header({ isDarkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="Header">
      <h1 className="Header-title">devfinder</h1>
      <div className="Header-toggle" onClick={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <>
            {" "}
            <span>LIGHT</span> <img src={sun} alt="sun" />{" "}
          </>
        ) : (
          <>
            {" "}
            <span>DARK</span> <img src={moon} alt="moon" />{" "}
          </>
        )}
      </div>
    </header>
  );
}

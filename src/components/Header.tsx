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
      <h1 className={`Header-title ${isDarkMode && "dark"}`}>devfinder</h1>
      <div
        className={`Header-toggle ${isDarkMode && "reverse-trans-effect"}`}
        onClick={() => setDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <>
            {" "}
            <span className="dark">LIGHT</span> <img src={sun} alt="sun" />{" "}
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

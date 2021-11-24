import { useState, useEffect, useRef } from "react";
import { AxiosError } from "axios";
import useAxios from "axios-hooks";
import InputBar from "./components/InputBar";
import InfoDisplay from "./components/InfoDisplay";
import Header from "./components/Header";
import "./App.css";

/**
 * TODO List:
 * Refactor
 * Finish readme
 */

// checks if the user prefers dark mode
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const useDarkMode = mq.matches;

// * Constants
const URL = "https://api.github.com/users/";

function App() {
  // * Hooks
  const [username, setUsername] = useState("octocat");
  // dark mode styles found in InfoDisplay.css
  const [isDarkMode, setDarkMode] = useState(false);
  const [{ data, loading, error }] = useAxios(`${URL}${username}`);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      // will begin in dark mode if the user prefers it
      useDarkMode ? setDarkMode(true) : setDarkMode(false);
      return;
    }

    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <InputBar
        setUsername={setUsername}
        isDarkMode={isDarkMode}
        error={error as AxiosError<any, any> | null}
      />
      <InfoDisplay
        isDarkMode={isDarkMode}
        data={data}
        loading={loading}
        error={error as AxiosError<any, any> | null}
      />
    </div>
  );
}

export default App;

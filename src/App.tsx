import { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import InputBar from "./components/InputBar";
import InfoDisplay from "./components/InfoDisplay";
import Header from "./components/Header";
import "./App.css";

/**
 * TODO List:
 * Add error message when search fails
 * Refactor
 * Finish readme
 * Have the correct color scheme chosen for the user based on their computer
 *    preferences. I.E. `prefers-color-scheme` in CSS.
 * Add favicon
 */

// * Constants
const URL = "https://api.github.com/users/";

function App() {
  // * Hooks
  const [username, setUsername] = useState("octocat");
  // dark mode styles found in InfoDisplay.css
  const [isDarkMode, setDarkMode] = useState(false);
  const [{ data, loading, error }] = useAxios(`${URL}${username}`);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <InputBar
        setUsername={setUsername}
        isDarkMode={isDarkMode}
        error={error}
      />
      <InfoDisplay
        isDarkMode={isDarkMode}
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import InputBar from "./components/InputBar";
import InfoDisplay from "./components/InfoDisplay";
import Header from "./components/Header";
import "./App.css";

function App() {
  // * Hooks
  const [username, setUsername] = useState("octocat");
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    console.log({ isDarkMode });
  }, [isDarkMode]);

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <InputBar setUsername={setUsername} isDarkMode={isDarkMode} />
      <InfoDisplay username={username} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

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
    document.body.classList.toggle("dark", isDarkMode);
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

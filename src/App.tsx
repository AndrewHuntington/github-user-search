import { useState } from "react";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import InfoDisplay from "./components/InfoDisplay";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  // * Hooks
  const [username, setUsername] = useState("octocat");

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <InputBar setUsername={setUsername} />
        <InfoDisplay username={username} />
      </div>
    </ThemeProvider>
  );
}

export default App;

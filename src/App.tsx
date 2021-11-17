import { useState } from "react";
import Header from "./Header";
import InputBar from "./InputBar";
import InfoDisplay from "./InfoDisplay";
import "./App.css";

// * Constants
const URL = "https://api.github.com/users/";
const USER_INFO = [
  "avatar_url",
  "name",
  "login",
  "created_at",
  "bio",
  "public_repos",
  "followers",
  "following",
  "location",
  "blog",
  "twitter_username",
  "company",
];

function App() {
  // * Hooks
  const [username, setUsername] = useState("octocat");

  return (
    <div className="App">
      <Header />
      <InputBar setUsername={setUsername} />
      <InfoDisplay username={username} />
    </div>
  );
}

export default App;

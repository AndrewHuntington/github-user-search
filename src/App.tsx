import { useState } from "react";
import useAxios from "axios-hooks";
import Header from "./Header";
import InputBar from "./InputBar";
import "./App.css";

// * Constants
const URL = "https://api.github.com/users/";
const USER_INFO = [
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
  const [{ data, loading, error }] = useAxios(`${URL}${username}`);

  // * API States
  // TODO: Improve these
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  // TODO: Remove (for debugging purposes)
  // console.log(watch("userSearch"));

  const userDataToDisplay = USER_INFO.map((key, i) => {
    return (
      <div key={i}>
        <p>
          {key}: {data?.[key]}
        </p>
      </div>
    );
  });

  return (
    <div className="App">
      <Header />
      <InputBar setUsername={setUsername} />
      {userDataToDisplay}
    </div>
  );
}

export default App;

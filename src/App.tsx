import { useState } from "react";
import useAxios from "axios-hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";

// * Type declarations
type Input = {
  userSearch: string;
};

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  // * API States
  // TODO: Improve these
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const onSubmit: SubmitHandler<Input> = (userInput: Input) => {
    // TODO: Remove (debug)
    console.log(userInput);

    setUsername(userInput.userSearch);
    reset();
  };

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
      <h1 className="App-title">devfinder</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Input-container">
          <input
            type="text"
            {...register("userSearch")}
            placeholder="Search GitHub username..."
          />
          <button type="submit">Search</button>
        </div>
      </form>
      {userDataToDisplay}
    </div>
  );
}

export default App;

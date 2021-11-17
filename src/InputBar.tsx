import { useForm } from "react-hook-form";
import searchIcon from "./assets/icon-search.svg";
import "./InputBar.css";

// * Type declarations
type Input = {
  userSearch: string;
};

type FormProps = {
  setUsername: (username: string) => void;
};

export default function Form({ setUsername }: FormProps) {
  // Axios hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit = (userInput: Input) => {
    // TODO: Remove (debug)
    console.log(userInput);

    setUsername(userInput.userSearch);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Input-container">
        <div className="Input-search-container">
          <img src={searchIcon} alt="magnifying glass" />
          <input
            type="text"
            {...register("userSearch")}
            placeholder="Search GitHub username…"
          />
        </div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

import { useState } from "react";
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
  // * Hooks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();
  const [isFocus, setIsFocus] = useState(true);
  const [isBlur, setIsBlur] = useState(false);

  const onSubmit = (userInput: Input) => {
    // TODO: Remove (debug)
    console.log(userInput);

    setUsername(userInput.userSearch);
    reset();
  };

  const changeOpacity = () => {
    const btn = document.querySelector("button");

    if (btn?.classList.contains("opaque") && isBlur) {
      btn?.classList.remove("opaque");
    } else {
      btn?.classList.add("opaque");
    }
  };

  const handleFocus = () => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const handleBlur = () => {
    setIsFocus(false);
    setIsBlur(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Input-container">
        <div
          className="Input-search-container"
          onMouseEnter={changeOpacity}
          onMouseLeave={changeOpacity}
        >
          <img src={searchIcon} alt="magnifying glass" />
          <input
            type="text"
            {...register("userSearch")}
            placeholder="Search GitHub username…"
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoFocus
          />
        </div>
        <button type="submit" className={isFocus ? "opaque" : ""}>
          Search
        </button>
      </div>
    </form>
  );
}

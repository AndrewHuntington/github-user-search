import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import searchIcon from "../assets/icon-search.svg";
import "./InputBar.css";

// TODO:
// Add error message when search fails

// * Type declarations
type Input = {
  userSearch: string;
};

type InputBarProps = {
  setUsername: (username: string) => void;
  isDarkMode: boolean;
};

export default function InputBar({ setUsername, isDarkMode }: InputBarProps) {
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
      <div className={`Input-container ${isDarkMode && "semi-dark"}`}>
        <div
          className="Input-search-container"
          onMouseEnter={changeOpacity}
          onMouseLeave={changeOpacity}
        >
          <img src={searchIcon} alt="magnifying glass" />
          {/* TODO: Add error message when search fails */}
          <input
            className={`${isDarkMode && "semi-dark"}`}
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

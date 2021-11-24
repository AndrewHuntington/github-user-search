import { useState } from "react";
import { useForm } from "react-hook-form";
import searchIcon from "../assets/icon-search.svg";
import "./InputBar.css";

// * Type declarations
type Input = {
  userSearch: string;
};

type InputBarProps = {
  setUsername: (username: string) => void;
  isDarkMode: boolean;
  error: any; // TODO: Type better
};

export default function InputBar({
  setUsername,
  isDarkMode,
  error,
}: InputBarProps) {
  // * Hooks
  const { register, handleSubmit, reset } = useForm<Input>();
  const [isFocus, setIsFocus] = useState(true);
  const [isBlur, setIsBlur] = useState(false);

  const onSubmit = (userInput: Input) => {
    setUsername(userInput.userSearch);
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
          <input
            className={`${isDarkMode && "semi-dark"}`}
            type="text"
            {...register("userSearch")}
            placeholder="Search GitHub username…"
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoFocus
          />
          {error && <div className="Input-error-msg"></div>}
        </div>
        <button type="submit" className={isFocus ? "opaque" : ""}>
          Search
        </button>
      </div>
    </form>
  );
}

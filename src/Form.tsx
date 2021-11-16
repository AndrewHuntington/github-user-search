import { useForm, SubmitHandler } from "react-hook-form";

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
        <input
          type="text"
          {...register("userSearch")}
          placeholder="Search GitHub username..."
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

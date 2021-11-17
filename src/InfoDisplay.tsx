import useAxios from "axios-hooks";
import "./InfoDisplay.css";

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

// * Type Declarations
type InfoDisplayProps = {
  username: string;
};

export default function InfoDisplay({ username }: InfoDisplayProps) {
  // * Hooks
  const [{ data, loading, error }] = useAxios(`${URL}${username}`);

  // * API States
  // TODO: Improve these
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const userDataToDisplay = USER_INFO.map((key, i) => {
    return (
      <div key={i}>
        <p>
          {key}: {data?.[key]}
        </p>
      </div>
    );
  });
  return <div className="InfoDisplay">{userDataToDisplay}</div>;
}

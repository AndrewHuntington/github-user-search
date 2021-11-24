import useAxios from "axios-hooks";
import InfoDisplayHeader from "./InfoDisplayHeader";
import InfoDisplayBody from "./InfoDisplayBody";
import InfoDisplayBottom from "./InfoDisplayBottom";
import "./InfoDisplay.css";

// * Constants
const URL = "https://api.github.com/users/";

// * Type Declarations
type InfoDisplayProps = {
  username: string;
  isDarkMode: boolean;
};

export default function InfoDisplay({
  username,
  isDarkMode,
}: InfoDisplayProps) {
  // * Hooks
  const [{ data, loading, error }] = useAxios(`${URL}${username}`);

  // * API States
  // TODO: Improve these
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className={`InfoDisplay ${isDarkMode && "semi-dark"}`}>
      <InfoDisplayHeader
        name={data["name"]}
        login={data["login"]}
        created_at={data["created_at"]}
        avatar_url={data["avatar_url"]}
        isDarkMode={isDarkMode}
      />

      <div className="InfoDisplay-desktop-helper">
        <InfoDisplayBody
          bio={data["bio"]}
          public_repos={data["public_repos"]}
          followers={data["followers"]}
          following={data["following"]}
          isDarkMode={isDarkMode}
        />
        <InfoDisplayBottom
          location={data["location"]}
          blog={data["blog"]}
          twitter_username={data["twitter_username"]}
          company={data["company"]}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}

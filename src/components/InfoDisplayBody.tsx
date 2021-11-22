import "./InfoDisplayBody.css";

type InfoDisplayBodyProps = {
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
};

export default function InfoDisplayBody({
  bio,
  public_repos,
  followers,
  following,
}: InfoDisplayBodyProps) {
  return (
    <div className="InfoDisplayBody">
      <div className="InfoDisplayBody-bio">
        {bio ? (
          <p>{bio}</p>
        ) : (
          <p className="transparent">This profile has no bio</p>
        )}
      </div>
    </div>
  );
}

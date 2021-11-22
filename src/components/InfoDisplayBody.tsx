import "./InfoDisplayBody.css";

type InfoDisplayBodyProps = {
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
};

/**
 * Note: This should probably be split into two components,
 * but since I'm not reusing these components, I'm just going to leave
 * it as one component.
 **/
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

      <div className="InfoDisplayBody-stat-block">
        <div className="InfoDisplayBody-columns">
          <div className="col-1">
            <div className="stat-block-title">
              <h4>Repos</h4>
            </div>
            <div className="stat-block-value">
              <h2>{public_repos}</h2>
            </div>
          </div>

          <div className="col-2">
            <div className="stat-block-title">
              <h4>Followers</h4>
            </div>
            <div className="stat-block-value">
              <h2>{followers}</h2>
            </div>
          </div>

          <div className="col-3">
            <div className="stat-block-title">
              <h4>Following</h4>
            </div>
            <div className="stat-block-value">
              <h2>{following}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

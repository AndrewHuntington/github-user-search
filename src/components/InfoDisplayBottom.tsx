import "../assets/icons.css";
import "./InfoDisplayBottom.css";

type InfoDisplayBottomProps = {
  location?: string;
  blog?: string;
  twitter_username?: string;
  company?: string;
  isDarkMode: boolean;
};

export default function InfoDisplayBottom({
  location,
  blog,
  twitter_username,
  company,
  isDarkMode,
}: InfoDisplayBottomProps) {
  return (
    <div className="InfoDisplayBottom">
      {/* TODO: Maybe this does need a refactor after all? */}
      {/*
        These "lines" could all refactored into their own components,
        but the simplicity of this project, plus the need to consider
        multiple veiwports makes doing so more difficult than necessary, 
        I think.
      */}
      <div className="InfoDisplayBottom-col-1">
        <div
          className={`InfoDisplayBottom-line ${location ? "" : "transparent"}`}
        >
          {/* <img className="location" src={iconLocation} alt="" /> */}
          <div className={`icon loc-icon ${isDarkMode && "icon-dark"}`}></div>
          <p>{location ? location : "Not Available"}</p>
        </div>

        <a
          className={`InfoDisplayBottom-link ${isDarkMode && "semi-dark"}  ${
            blog ? "" : "inactive"
          }`}
          href={`http://${blog}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`InfoDisplayBottom-line ${blog ? "" : "transparent"}`}
          >
            {/* <img src={iconWebsite} alt="" /> */}
            <div
              className={`icon link-icon ${isDarkMode && "icon-dark"}`}
            ></div>
            <p>{blog ? blog : "Not Available"}</p>
          </div>
        </a>
      </div>

      <div className="InfoDisplayBottom-col-2">
        <a
          className={`InfoDisplayBottom-link ${isDarkMode && "semi-dark"} ${
            twitter_username ? "" : "inactive"
          }`}
          href={`https://twitter.com/${twitter_username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`InfoDisplayBottom-line ${
              twitter_username ? "" : "transparent"
            }`}
          >
            {/* <img src={iconTwitter} alt="" /> */}
            <div
              className={`icon twitter-icon ${isDarkMode && "icon-dark"}`}
            ></div>
            <p>{twitter_username ? twitter_username : "Not Available"}</p>
          </div>
        </a>

        <a
          className={`InfoDisplayBottom-link ${isDarkMode && "semi-dark"} ${
            company ? "" : "inactive"
          }`}
          href={`https://github.com/${company?.slice(1, company.length)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`InfoDisplayBottom-line ${company ? "" : "transparent"}`}
          >
            {/* <img src={iconCompany} alt="" /> */}
            <div
              className={`icon company-icon ${isDarkMode && "icon-dark"}`}
            ></div>
            <p>{company ? company : "Not Available"}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

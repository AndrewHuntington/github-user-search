import iconLocation from "../assets/icon-location.svg";
import iconWebsite from "../assets/icon-website.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconCompany from "../assets/icon-company.svg";
import "./InfoDisplayBottom.css";

type InfoDisplayBottomProps = {
  location?: string;
  blog?: string;
  twitter_username?: string;
  company?: string;
};

export default function InfoDisplayBottom({
  location,
  blog,
  twitter_username,
  company,
}: InfoDisplayBottomProps) {
  return (
    <div className="InfoDisplayBottom">
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
          <img className="location" src={iconLocation} alt="" />
          <p>{location ? location : "Not Available"}</p>
        </div>

        <a
          className={`InfoDisplayBottom-link ${blog ? "" : "inactive"}`}
          href={`http://${blog}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`InfoDisplayBottom-line ${blog ? "" : "transparent"}`}
          >
            <img src={iconWebsite} alt="" />
            <p>{blog ? blog : "Not Available"}</p>
          </div>
        </a>
      </div>

      <div className="InfoDisplayBottom-col-2">
        <a
          className={`InfoDisplayBottom-link ${
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
            <img src={iconTwitter} alt="" />
            <p>{twitter_username ? twitter_username : "Not Available"}</p>
          </div>
        </a>

        <a
          className={`InfoDisplayBottom-link ${company ? "" : "inactive"}`}
          href={`https://github.com/${company?.slice(1, company.length)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`InfoDisplayBottom-line ${company ? "" : "transparent"}`}
          >
            <img src={iconCompany} alt="" />
            <p>{company ? company : "Not Available"}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

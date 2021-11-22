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
      <div
        className={`InfoDisplayBottom-line ${location ? "" : "transparent"}`}
      >
        <img className="location" src={iconLocation} alt="" />
        <p>{location ? location : "Not Available"}</p>
      </div>

      <div className={`InfoDisplayBottom-line ${blog ? "" : "transparent"}`}>
        <img src={iconWebsite} alt="" />
        <p>{blog ? blog : "Not Available"}</p>
      </div>

      <div
        className={`InfoDisplayBottom-line ${
          twitter_username ? "" : "transparent"
        }`}
      >
        <img src={iconTwitter} alt="" />
        <p>{twitter_username ? twitter_username : "Not Available"}</p>
      </div>

      <div className={`InfoDisplayBottom-line ${company ? "" : "transparent"}`}>
        <img src={iconCompany} alt="" />
        <p>{company ? company : "Not Available"}</p>
      </div>
    </div>
  );
}

import React from "react";
import "./InfoDisplayHeader.css";

type InfoDisplayHeaderProps = {
  login?: string;
  avatar_url: string;
  name?: string;
  created_at: string;
  isDarkMode: boolean;
};

export default function InfoDisplayHeader({
  login,
  avatar_url,
  name,
  created_at,
  isDarkMode,
}: InfoDisplayHeaderProps) {
  const parseDate = (dateStr: string) => {
    if (!dateStr) return "Not Available";

    const months: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let [year, month, day]: string[] = dateStr
      .slice(0, dateStr.indexOf("T"))
      .split("-");
    month = months[parseInt(month) - 1];
    return `${day} ${month} ${year}`;
  };

  return (
    <header className="InfoDisplayHeader">
      <div className="InfoDisplayHeader-col-1">
        <img className="InfoDisplayHeader-img" src={avatar_url} alt="" />
      </div>
      <div className="InfoDisplayHeader-col-2">
        <div className="InfoDisplayHeader-col-2-sub-col-1">
          <h1 className="InfoDisplayHeader-name">{name ? name : login}</h1>
          <h3 className="InfoDisplayHeader-login">@{login}</h3>
        </div>
        <div className="InfoDisplayHeader-col-2-sub-col-2">
          <p className={`InfoDisplayHeader-date ${isDarkMode && "semi-dark"}`}>
            Joined {parseDate(created_at!)}
          </p>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import "../styles/card.css";

export default function Card(props) {
  const { name, title, clubName, imgLink } = props;

  return (
    <div className="card-container">
      <div className="card-img">
        <img src={imgLink} alt={name} className="img-circle" />
      </div>
      <div className="card-title">
        {name} AND {title}
      </div>
      <div className="card-club">Club {clubName}</div>
    </div>
  );
}

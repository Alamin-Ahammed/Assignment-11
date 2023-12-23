import React from "react";
import { NavLink } from "react-router-dom";
import "./User.css";

export default function User({ user: { id, title, url } }) {
  return (
    <div className="user-container">
      <div key={id} className="user-content">
        <h1 className="user-title">{title}</h1>
        <img className="user-image" src={url} alt="Image" />
        <NavLink to={`/userDetails/${id}`} className="user-details-link">
          Details
        </NavLink>
      </div>
    </div>
  );
}


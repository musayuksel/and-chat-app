import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css";
import logo from "../styles/logo.png";
export default function Nav() {
  const location = useLocation();
  return (
    <>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              className={location.pathname === "/allandis" ? "active" : ""}
              to="/allandis"
            >
              Home
            </Link>
          </li>
          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              Form
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

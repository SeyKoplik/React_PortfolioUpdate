import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <>
    <div>
      <p>
        <Link to="/" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
          <span className="nameBanner">
          Seychelle Koplik</span>
        </Link>
      </p>
      </div>
      <ul className="nav links">
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"} >
          About
        </Link>
      </li>
      <li className="nav-item">||</li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">|| </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"} >
          Contact
        </Link>
      </li>
    </ul>
    </>
  );
}

export default NavTabs;


// showing active tab based on URL "location.pathname" inside Link tag
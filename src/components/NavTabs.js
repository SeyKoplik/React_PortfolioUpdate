import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
          Seychelle Koplik
        </Link>
      </li>
      </ul>
      <ul className="nav nav-tabs TESTNAV">
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About Sey
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Contact Sey
        </Link>
      </li>
    </ul>
    </>
  );
}

export default NavTabs;


// showing active tab based on URL "location.pathname" inside Link tag
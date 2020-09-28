import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Overview</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/liveChart">LiveChart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

import React from "react";
import NavLink from "./NavLink";

const Header = () => (
  <div className="header">
    <h1>React Router Tutorial</h1>
    <ul role="nav">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;

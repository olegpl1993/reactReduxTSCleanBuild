import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="logoRow">
        <div className="logoBox">
          <NavLink className="logo" to="/">
            SiteLogo
          </NavLink>
        </div>
        <nav className="navigation">
          <NavLink className="link" to="/">
            main
          </NavLink>
          <NavLink className="link" to="/second">
            second
          </NavLink>
          <NavLink className="link" to="/next">
            next
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

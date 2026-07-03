import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <nav>
        <ul className="menu">
          <li>
            <Link to="/menu1">HOME</Link>
          </li>
          <li>
            <Link to="/menu2">ABOUT</Link>

            <ul className="submenu">
              <li>
                <Link to="/menu2/sub1">Skills</Link>
              </li>
              <li>
                <Link to="/menu2/sub2">Projects</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/menu3">CONTACK</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

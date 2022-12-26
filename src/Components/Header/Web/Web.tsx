import React from "react";
import {Link} from "react-router-dom";
import "../Header.css";

function Web(): JSX.Element {
  return (
    <div className="menu web-menu">
    <li className="menu-item">
        <Link className="menu-item-link" to="/home">
        Home
        </Link>
    </li>
    <li className="menu-item">
        <Link className="menu-item-link" to="/news">
        News
        </Link>
    </li>
    <li className="menu-item">
        <Link className="menu-item-link" to="/characters">
        Characters
        </Link>
    </li>
    {/* <li><Link to="/home" />Home</li> */}
    </div>
  );
}

export default Web;

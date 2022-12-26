import React from "react";
import "./Header.css";
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";


function Header() {
  return (
    <nav className="nav-bar">
        <span className="title">ANIME SENSEI</span>
        <Web />
        <Mobile />
    </nav>
  )
}

export default Header

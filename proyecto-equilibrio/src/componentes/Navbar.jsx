import React from "react";
import { Link } from "react-router-dom";
import "../estilos/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/habitos">Hábitos</Link>
        </li>
        <li>
          <Link to="/sueno">Sueño</Link>
        </li>
        <li>
          <Link to="/motivacion">Motivación</Link>
        </li>
      </ul>
    </nav>
  );
}

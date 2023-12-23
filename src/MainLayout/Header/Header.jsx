import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import logo from "../../assets/react.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="nav list inc-exp-container">
      <img
        onClick={() => navigate("/")}
        className="logo"
        src={logo}
        alt="Logo"
      />
      <ul>
        <li className="list li active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list li">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="list li">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="list li">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="list li">
          <NavLink to="/registration">Registration</NavLink>
        </li>
        <li className="list li">
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
      <div>
        <div onClick={handleHamburgerMenu} className="hamburgerMenu">
          <GiHamburgerMenu />
        </div>
        {isMenuOpen && (
          <div className="hamburgurMenuLists">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/users">Users</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

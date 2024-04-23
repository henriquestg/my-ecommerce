"use client";
import { useState } from "react";
import "./styles.scss";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { Market } from "../Icon/Markte";
import { Notification } from "../Icon/Notification";
import { Link } from "react-scroll";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="menu">
      <div className="image">
        <Image src={Logo} alt="logo" width={160} height={40} />
      </div>
      <div className="navbar-container">
        <div className="navbar">
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="products" smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li>
              <input placeholder="Search" />
            </li>
          </ul>
        </div>

        <button>
          <Market /> Card
        </button>

        <button>
          <Notification /> Notification
        </button>
      </div>
    </nav>
  );
}

import Image from "next/image";
import { ButtonHeader } from "../ButtonHeader";
import { Market } from "../Icon/Markte";
import { Notification } from "../Icon/Notification";

import Logo from "../../../public/logo.png";

import "./styles.scss";

export function NavBar() {
  return (
    <div className="container">
      <div className="navbar-container">
        <Image src={Logo} alt="logo" width={160} height={40} />
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <input placeholder="Search" />
          <div className="marketplace">
            <button>
              <Market /> Card
            </button>
          </div>
          <div className="notification">
            <button>
              <Notification /> Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <ButtonHeader text="Home" />
          <ButtonHeader text="Products" />
          <ButtonHeader text="About Us" />
          <ButtonHeader text="Contact" />
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

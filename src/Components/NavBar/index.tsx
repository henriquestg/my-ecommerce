import { ButtonHeader } from "../ButtonHeader";
import { Search } from "../Icon/Search";
import { User } from "../Icon/User";
import "./styles.scss";

export function NavBar() {
  return (
    <div className="container">
      <div className="navbar-container">
        <img src="./logo.png" alt="logo" />
        <div className="navbar">
          <ButtonHeader text="Home" />
          <ButtonHeader text="Products" />
          <ButtonHeader text="About Us" />
          <ButtonHeader text="Contact" />
          <input placeholder="Search"></input>
        </div>
      </div>
    </div>
  );
}

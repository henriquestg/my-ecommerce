"use client";
import { useState } from "react";
import "./styles.scss";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { Market } from "../Icon/Markte";
import { Notification } from "../Icon/Notification";

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
              <a href="#" id="home">
                Home
              </a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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

// "use client";
// import Image from "next/image";
// import { ButtonHeader } from "../ButtonHeader";
// import { Market } from "../Icon/Markte";
// import { Notification } from "../Icon/Notification";

//

// import "./styles.scss";
// import { useState } from "react";

// export function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <div className="container">
//       <div className="navbar-container">
//
//         <div className="navbar-full">
//           <div className="navbar">
//             <div
//               className={`menu-icon ${menuOpen ? "open" : ""}`}
//               onClick={toggleMenu}
//             >
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//             </div>
//             <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
//               <li>
//                 <a href="#" id="home">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#mytech">Products</a>
//               </li>
//               <li>
//                 <a href="#about">About Us</a>
//               </li>
//               <li>
//                 <a href="#project">Contact</a>
//               </li>
//             </ul>
//           </div>
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Products</a>
//             </li>
//             <li>
//               <a href="#">About Us</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//           <input placeholder="Search" />
//           <div className="marketplace">
//             <button>
//               <Market /> Card
//             </button>
//           </div>
//           <div className="notification">
//             <button>
//               <Notification /> Notification
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

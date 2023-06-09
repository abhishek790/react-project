import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url} onClick={handleClick}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;

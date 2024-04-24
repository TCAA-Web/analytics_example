import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

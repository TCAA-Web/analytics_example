import { Link, Outlet } from "react-router-dom";
import { CookieBanner } from "../components/CookieBanner";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <CookieBanner />
      <footer>
        <h4>FOOTER</h4>
      </footer>
    </>
  );
};

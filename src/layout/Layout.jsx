import { Link, Outlet } from "react-router-dom";
import { CookieBanner } from "../components/CookieBanner/CookieBanner";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CookieBanner />
      <Footer />
    </>
  );
};

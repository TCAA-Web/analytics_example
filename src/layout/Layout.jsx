import { Link, Outlet } from "react-router-dom";
import { CookieBanner } from "../components/CookieBanner";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

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

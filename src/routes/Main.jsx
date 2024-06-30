import Navbar from "../parts/Navbar.jsx";
import Footer from "../parts/Footer.jsx";
import Banner from "../parts/Banner.jsx";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;


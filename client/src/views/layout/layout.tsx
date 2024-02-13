import React from "react";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Nav />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

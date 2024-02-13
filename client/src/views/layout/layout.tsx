import React from "react";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Nav />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
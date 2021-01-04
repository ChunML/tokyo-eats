import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <NavBar />
    <Container>
      {children}
      <Footer />
    </Container>
  </div>
);

export default Layout;

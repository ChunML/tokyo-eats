import React from "react";
import Container from "./Container";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <NavBar />
    <Container>{children}</Container>
  </div>
);

export default Layout;

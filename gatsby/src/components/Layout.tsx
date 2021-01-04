import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="max-w-screen-lg mx-auto p-5 text-gray-700">
    <NavBar />
    {children}
  </div>
);

export default Layout;

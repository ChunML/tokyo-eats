import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Container: React.FC<LayoutProps> = ({ children }) => (
  <div className="max-w-screen-lg mx-auto p-5 text-gray-700">{children}</div>
);

export default Container;

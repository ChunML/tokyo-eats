import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Container: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col h-screen max-w-screen-lg mx-auto p-5 mb-auto text-gray-700">
    {children}
  </div>
);

export default Container;

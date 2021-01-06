import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Container: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col h-screen lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-4/5 mx-auto mb-auto text-gray-600">
    {children}
  </div>
);

export default Container;

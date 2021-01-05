import React from "react";

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => (
  <h2 className="tracking-wider text-2xl text-center font-medium bg-purple-600 bg-opacity-50 rounded-2xl p-3 mb-4">
    {text}
  </h2>
);

export default Banner;

import React from "react";

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => (
  <h2 className="tracking-wider text-2xl text-center font-medium bg-green-400 rounded-2xl p-3 mb-4">
    {text}
  </h2>
);

export default Banner;

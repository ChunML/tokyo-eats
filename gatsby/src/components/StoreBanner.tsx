import React from "react";

interface StoreBannerProps {
  text: string;
}

const Banner: React.FC<StoreBannerProps> = ({ text }) => (
  <h2 className="text-2xl text-center font-medium bg-green-400 rounded-2xl p-2">
    {text}
  </h2>
);

export default Banner;

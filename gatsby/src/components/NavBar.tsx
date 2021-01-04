import { Link } from "gatsby";
import React from "react";

const NavBar: React.FC = () => (
  <nav className="py-2 text-xl text-gray-100 font-medium bg-gray-800">
    <ul className="grid grid-cols-fit justify-around justify-items-center">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/stores">Stores</Link>
      </li>
      <li>
        <Link to="/order">Your Order</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

import { Link } from "gatsby";
import React from "react";

const NavBar: React.FC = () => (
  <nav className="py-3 text-xl text-gray-100 font-medium bg-gray-800 mb-8">
    <ul className="grid md:grid-cols-3 grid-cols-1 justify-around justify-items-center">
      <li>
        <Link className="hover:text-red-400 hover:underline" to="/">
          Hot Now!
        </Link>
      </li>
      <li>
        <Link className="hover:text-red-400 hover:underline" to="/stores">
          Stores
        </Link>
      </li>
      <li>
        <Link className="hover:text-red-400 hover:underline" to="/order">
          Your Order
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

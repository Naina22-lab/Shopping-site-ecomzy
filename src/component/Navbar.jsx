import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white px-4 py-2 flex flex-row justify-between">
      <NavLink to="/">
        <div>
          <img src="../logo.png" className="h-14" alt="Company Logo" />
        </div>
      </NavLink>

      <div className="flex space-x-4">
        <NavLink to="/" className="hover:text-gray-400">
          Home
        </NavLink>
        <NavLink to="/cart" className="hover:text-gray-400">
          <FaShoppingCart />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

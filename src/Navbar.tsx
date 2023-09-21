import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full mb-4 bg-gray-800">
      <div className="container flex py-1">
          <h2 className="text-xl font-medium flex items-center pr-3"><Link className="text-gray-300 hover:text-white" to="/">Moments</Link></h2>
          <ul className="flex">
            <li className="text-sm font-medium flex items-stretch"><NavLink className={({ isActive }) => `${isActive ? "text-white bg-gray-900 flex items-center px-3 py-3" : "text-gray-300 hover:bg-gray-700 hover:text-white"} flex items-center px-3 py-3`} to={'/'}>All moments</NavLink></li>
            <li className="text-sm font-medium flex items-stretch"><NavLink className={({ isActive }) => `${isActive ? "text-white bg-gray-900 flex items-center px-3 py-3" : "text-gray-300 hover:bg-gray-700 hover:text-white"} flex items-center px-3 py-3`} to={'/new'}>New moment</NavLink></li>
            <li className="text-sm font-medium flex items-stretch"><NavLink className={({ isActive }) => `${isActive ? "text-white bg-gray-900 flex items-center px-3 py-3" : "text-gray-300 hover:bg-gray-700 hover:text-white"} flex items-center px-3 py-3`} to={'/favorites'}>Favorites</NavLink></li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;

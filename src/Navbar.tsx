import { Link, NavLink } from "react-router-dom";

type NavbarLink = {
  path: string;
  text: string;
}

const Navbar = () => {
  const links: NavbarLink[] = [
    {
      path: '/',
      text: 'All moments'
    },
    {
      path: '/new',
      text: 'New moment'
    },
    {
      path: '/favorites',
      text: 'Favorites'
    },
  ];
  return (
    <nav className="w-full mb-4 bg-gray-800">
      <div className="container flex py-1">
        <h2 className="text-xl font-medium flex items-center pr-3">
          <Link className="text-gray-300 hover:text-white" to="/">
            Moments
          </Link>
        </h2>
        <ul className="flex">
          {links.map(({ path, text }) => (
            <li className="text-sm font-medium flex items-stretch">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white bg-gray-900 flex items-center px-3 py-3"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } flex items-center px-3 py-3`
                }
                to={path}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

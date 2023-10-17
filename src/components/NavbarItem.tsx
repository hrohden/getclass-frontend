import { NavLink } from 'react-router-dom'
import { NavbarMenuItem } from '../types/NavbarMenuItem'

const NavbarItem = ({
  item: { id, path, icon, display },
  children,
}: {
  item: NavbarMenuItem
  children: React.ReactNode
}) => {
  return display ? (
    <li className='flex items-stretch text-sm font-medium' key={id}>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive
              ? 'flex items-center bg-gray-900 px-3 py-3 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          } flex items-center rounded-md px-3 py-3`
        }
        to={path}
      >
        <i className={`fa-fw fa-solid fa-${icon} mr-2 text-gray-500`}></i>
        {children}
      </NavLink>
    </li>
  ) : null
}
export default NavbarItem

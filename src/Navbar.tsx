import { Link, NavLink } from 'react-router-dom'

type NavbarLink = {
  path: string
  text: string
}

const Navbar = () => {
  const links: NavbarLink[] = [
    {
      path: '/',
      text: 'All moments',
    },
    {
      path: '/new',
      text: 'New moment',
    },
    {
      path: '/favorites',
      text: 'Favorites',
    },
  ]
  return (
    <nav className='mb-4 w-full bg-gray-800'>
      <div className='container mx-auto flex py-1'>
        <h2 className='flex items-center pr-3 text-xl font-medium'>
          <Link className='text-gray-300 hover:text-white' to='/'>
            Moments
          </Link>
        </h2>
        <ul className='flex'>
          {links.map(({ path, text }) => (
            <li className='flex items-stretch text-sm font-medium'>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'flex items-center bg-gray-900 px-3 py-3 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } flex items-center px-3 py-3 rounded-md`
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
  )
}

export default Navbar

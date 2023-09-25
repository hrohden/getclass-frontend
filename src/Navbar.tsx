import { Link, NavLink } from 'react-router-dom'

type NavbarLink = {
  id: string
  path: string
  text: string
}

const Navbar = () => {
  const links: NavbarLink[] = [
    {
      id: '1',
      path: '/',
      text: 'All moments',
    },
    {
      id: '2',
      path: '/new',
      text: 'New moment',
    },
    {
      id: '3',
      path: '/favorites',
      text: 'Favorites',
    },
  ]
  return (
    <nav className='mb-4 w-full bg-gray-800'>
      <div className='container mx-auto flex items-center gap-4 py-1'>
        <img src="../public/moment.png" alt="" className='h-7' />
        <h2 className='flex items-center text-xl font-medium'>
          <Link className='text-gray-300 hover:text-white' to='/'>
            Moments
          </Link>
        </h2>
        <ul className='flex'>
          {links.map(({ id, path, text }) => (
            <li className='flex items-stretch text-sm font-medium' key={id}>
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

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppStore } from '../types/AppStore'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const isAuthenticated = useSelector(
    (state: AppStore) => state.identity.isAuthenticated,
  )
  return (
    <nav className='mb-4 w-full bg-gray-800'>
      <div className='container mx-auto flex items-center gap-4 py-1'>
        <img src='/moment.png' alt='' className='h-7' />
        <h2 className='flex items-center text-xl font-medium'>
          <Link className='text-gray-300 hover:text-white' to='/'>
            Moments
          </Link>
        </h2>
        <ul className='flex'>
          <NavbarItem
            item={{
              id: '1',
              path: '/all',
              icon: 'list',
              display: isAuthenticated,
            }}
          >
            All moments
          </NavbarItem>
          <NavbarItem
            item={{
              id: '2',
              path: '/new',
              icon: 'plus',
              display: isAuthenticated,
            }}
          >
            New moment
          </NavbarItem>
          <NavbarItem
            item={{
              id: '3',
              path: '/favorites',
              icon: 'heart',
              display: isAuthenticated,
            }}
          >
            Favorites
          </NavbarItem>
          <NavbarItem
            item={{
              id: '4',
              path: '/test',
              icon: 'test',
              display: isAuthenticated,
            }}
          >
            Tests
          </NavbarItem>
        </ul>
        <ul className='flex'>
          {isAuthenticated ? (
            <NavbarItem
              item={{
                id: '2',
                path: '/logout',
                icon: 'plus',
                display: isAuthenticated,
              }}
            >
              Logout
            </NavbarItem>
          ) : (
            <NavbarItem
              item={{
                id: '1',
                path: '/login',
                icon: 'list',
                display: !isAuthenticated,
              }}
            >
              Login
            </NavbarItem>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

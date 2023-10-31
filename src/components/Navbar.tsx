import { Link } from 'react-router-dom'
import NavbarItem from './NavbarItem'

const Navbar = () => {
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
            }}
          >
            All moments
          </NavbarItem>
          <NavbarItem
            item={{
              id: '2',
              path: '/new',
              icon: 'plus',
            }}
          >
            New moment
          </NavbarItem>
          <NavbarItem
            item={{
              id: '3',
              path: '/favorites',
              icon: 'heart',
            }}
          >
            Favorites
          </NavbarItem>
          <NavbarItem
            item={{
              id: '4',
              path: '/test',
              icon: 'test',
            }}
          >
            Tests
          </NavbarItem>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

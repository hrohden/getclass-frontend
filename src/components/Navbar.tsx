import { Link } from 'react-router-dom'
import { NavbarMenuItem } from '../types/NavbarMenuItem'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const links: NavbarMenuItem[] = [
    {
      id: '1',
      path: '/',
      text: 'All moments',
      icon: 'list',
    },
    {
      id: '2',
      path: '/new',
      text: 'New moment',
      icon: 'plus',
    },
    {
      id: '3',
      path: '/favorites',
      text: 'Favorites',
      icon: 'heart',
    },
  ]
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
          {links.map(item => (
            <NavbarItem item={item} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

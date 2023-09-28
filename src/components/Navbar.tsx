import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MomentsContext from '../store/momentsContext'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const context = useContext(MomentsContext)

  const allMomentsText =
    context.moments.length > 0
      ? `All moments (${context.moments.length})`
      : 'All moments'

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
            item={{ id: '1', path: '/', text: allMomentsText, icon: 'list' }}
          />
          <NavbarItem
            item={{ id: '2', path: '/new', text: 'New moment', icon: 'plus' }}
          />
          <NavbarItem
            item={{
              id: '3',
              path: '/favorites',
              text: 'Favorites',
              icon: 'heart',
            }}
          />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

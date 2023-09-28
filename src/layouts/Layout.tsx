import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='container mx-auto flex flex-col gap-4'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

import { Navigate, Outlet } from 'react-router-dom'
import { useGetAuthentication } from '../hooks/useAuthentication'

const ProtectedRoutes = () => {
  const getAuthentication = useGetAuthentication()
  return getAuthentication?.data ? <Outlet /> : <Navigate to='/login' />
}
export default ProtectedRoutes

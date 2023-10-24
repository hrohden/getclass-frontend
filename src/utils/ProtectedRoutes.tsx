import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { AppStore } from '../types/AppStore'

const ProtectedRoutes = () => {
  const isAuthenticated = useSelector(
    (state: AppStore) => state.identity.isAuthenticated,
  )
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
export default ProtectedRoutes

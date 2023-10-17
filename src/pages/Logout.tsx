import { useEffect } from 'react'
import { useDeleteAuthentication } from '../hooks/useAuthentication'
import { Navigate } from 'react-router-dom'

const Logout = () => {
  const deleteAuthentication = useDeleteAuthentication()

  useEffect(() => {
    deleteAuthentication.mutateAsync()
  }, [])

  return <Navigate to='/' />
}
export default Logout

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteAuthentication } from '../hooks/useAuthentication'

const Logout = () => {
  const deleteAuthentication = useDeleteAuthentication()
  const navigate = useNavigate()

  useEffect(() => {
    deleteAuthentication.mutateAsync()
    navigate('/')
  }, [])

  return null
}
export default Logout

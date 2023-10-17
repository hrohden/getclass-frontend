import { useEffect } from 'react'
import { useDeleteAuthentication } from '../hooks/useAuthentication'

const Logout = () => {
  const deleteAuthentication = useDeleteAuthentication()

  useEffect(() => {
    deleteAuthentication.mutateAsync()
  }, [])
  
  return <div>Logout</div>
}
export default Logout

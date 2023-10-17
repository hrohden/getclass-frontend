import { useEffect } from 'react'
import { useDeleteAuthentication } from '../hooks/useAuthentication'

const Logout = () => {
  useEffect(() => {
    useDeleteAuthentication()()
  })
  return <div>Logout</div>
}
export default Logout

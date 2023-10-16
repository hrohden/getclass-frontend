import toast from 'react-hot-toast'
import LoginForm from '../components/LoginForm'
import { usePostAuthentication } from '../hooks/useAuthentication'

const Login = () => {
  const postAuthentication = usePostAuthentication()
  return (
    <div className='flex justify-center'>
      <div className='w-96'>
        <LoginForm
          handleLogin={async (loginForm: LoginFormInputs) => {
            const loginSuccessfull =
              await postAuthentication.mutateAsync(loginForm)
            console.log(loginSuccessfull)
            toast.success('Login successful!')
          }}
        />
      </div>
    </div>
  )
}
export default Login

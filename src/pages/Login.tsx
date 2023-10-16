import LoginForm from '../components/LoginForm'
import { usePostAuthentication } from '../hooks/useAuthentication'

const Login = () => {
  const postAuthentication = usePostAuthentication()
  return (
    <div className='flex justify-center'>
      <div className='w-96'>
        <LoginForm
          handleLogin={async (loginForm: LoginFormInputs) => {
            await postAuthentication.mutateAsync(loginForm)
          }}
        />
      </div>
    </div>
  )
}
export default Login

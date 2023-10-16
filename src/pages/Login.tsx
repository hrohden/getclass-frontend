import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-96'>
        <LoginForm
          handleLogin={(data: LoginFormInputs) => {
            console.log(data)
          }}
        />
      </div>
    </div>
  )
}
export default Login

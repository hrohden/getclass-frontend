import { Alert, Button, Label, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import {
  HiCheck,
  HiInformationCircle,
  HiOutlineLockClosed,
  HiUser,
} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../store/identitySlice'

const LoginForm = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      username: 'hrohden@gmail.com',
      password: '1234',
    },
  })

  return (
    <form
      onSubmit={handleSubmit(async (loginForm: LoginFormInputs) => {
        // @ts-ignore
        dispatch(loginThunk(loginForm))
      })}
      className='flex w-full flex-col gap-4 rounded-xl border border-gray-300 p-4 shadow-sm'
    >
      {errors.root?.message && (
        <Alert color='failure' icon={HiInformationCircle}>
          {errors.root?.message}
        </Alert>
      )}
      <div>
        <Label htmlFor='username' value='User' />
        <TextInput
          id='username'
          icon={HiUser}
          color={errors.username ? 'failure' : undefined}
          helperText={errors.username ? errors.username.message : undefined}
          type='email'
          {...register('username', { required: true })}
        />
      </div>
      <div>
        <Label htmlFor='password' value='Password' />
        <TextInput
          id='password'
          icon={HiOutlineLockClosed}
          color={errors.password ? 'failure' : undefined}
          helperText={errors.password ? errors.password.message : undefined}
          type='password'
          {...register('password', { required: true })}
        />
      </div>
      <div>
        <Button type='submit' className='w-full'>
          <HiCheck className='mr-2 h-5 w-5' />
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm

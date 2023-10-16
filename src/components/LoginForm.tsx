import { Button, Label, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { HiCheck, HiOutlineLockClosed, HiUser } from 'react-icons/hi'

type LoginFormInputs = {
  username: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-4 rounded-xl border border-gray-300 p-4 shadow-sm'
    >
      <div>
        <Label htmlFor='username' value='User' />
        <TextInput
          id='username'
          icon={HiUser}
          color={errors.username ? 'failure' : undefined}
          helperText={errors.username ? 'Username not provided' : undefined}
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
          helperText={errors.password ? 'Password not provided' : undefined}
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

import { Button, Label, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'

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
      className='flex w-full flex-col gap-4'
    >
      <div>
        <Label htmlFor='username' value='User' />
        <TextInput
          id='username'
          color={errors.username ? 'failure' : undefined}
          helperText={errors.username ? 'This field is required.' : undefined}
          type='email'
          {...register('username', { required: true })}
        />
      </div>
      <div>
        <Label htmlFor='password' value='Password' />
        <TextInput
          id='password'
          color={errors.password ? 'failure' : undefined}
          helperText={errors.password ? 'This field is required.' : undefined}
          type='password'
          {...register('password', { required: true })}
        />
      </div>
      <div>
        <Button type='submit'>Login</Button>
      </div>
    </form>
  )
}

export default LoginForm

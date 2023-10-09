import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Moment } from '../types/Moment'

const MomentForm = ({
  moment,
  submitForm,
}: {
  moment: Moment
  submitForm: SubmitHandler<Moment>
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: moment,
  })

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className='flex w-full flex-col gap-4'
    >
      <div className='flex flex-col gap-2'>
        <Label htmlFor='title' value='Title' />
        <TextInput
          id='title'
          color={errors.title ? 'failure' : undefined}
          helperText={errors.title ? 'This field is required.' : undefined}
          type='text'
          {...register('title', { required: true })}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Label htmlFor='headline' value='Headline' />
        <TextInput
          id='headline'
          color={errors.headline ? 'failure' : undefined}
          helperText={errors.headline ? 'This field is required.' : undefined}
          type='text'
          {...register('headline', { required: false })}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Label htmlFor='description' value='Description' />
        <Textarea
          id='description'
          color={errors.description ? 'failure' : undefined}
          helperText={
            errors.description ? 'This field is required.' : undefined
          }
          rows={4}
          {...register('description', { required: true })}
        />
      </div>
      <div className='flex items-center justify-between'>
        <Button type='submit'>Save</Button>
      </div>
    </form>
  )
}
export default MomentForm

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
        <label
          htmlFor='title'
          className={`block font-bold ${
            errors.title ? 'text-red-600' : 'text-gray-700'
          }`}
        >
          Title
        </label>
        <input
          type='text'
          id='title'
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-gray-700 shadow focus:outline-none ${
            errors.title
              ? 'border-red-600 shadow-red-300'
              : 'border-gray-200 shadow-gray-300'
          }`}
          {...register('title', { required: true })}
        />
        {errors.title && (
          <p className='text-red-600'>This field is required.</p>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='headline' className='block font-bold text-gray-700'>
          Headline
        </label>
        <input
          type='text'
          id='headline'
          className='focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-gray-700 shadow focus:outline-none'
          {...register('headline', { required: false })}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='description'
          className={`block font-bold ${
            errors.description ? 'text-red-600' : 'text-gray-700'
          }`}
        >
          Description
        </label>
        <textarea
          id='description'
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-gray-700 shadow focus:outline-none ${
            errors.description
              ? 'border-red-600 shadow-red-300'
              : 'border-gray-200 shadow-gray-300'
          }`}
          rows={4}
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && (
          <p className='text-red-600'>This field is required.</p>
        )}
      </div>
      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
        >
          <i className='fa-fw fa-solid fa-plus mr-2'></i>Submit
        </button>
      </div>
    </form>
  )
}
export default MomentForm

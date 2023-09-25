import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import DefaultLayout from '../layouts/DefaultLayout'
import MomentsContext from '../store/momentsContext'
import { Moment } from '../types/Moment'

const defaultValues = {
  title: 'My new moment',
  headline: 'This is my new moment',
  description: 'Look at this moment! It is so cool!',
}

const New = () => {
  const momentsContext = useContext(MomentsContext)
  const { register, getValues, handleSubmit } = useForm({
    defaultValues,
  })

  const submitForm = () => {
    const values: Moment = { id: uuidv4(), isFavorite: false, ...getValues() }
    momentsContext.addMoment(values)
  }

  return (
    <DefaultLayout
      title='New moment'
      description='Wanna create a new moment to never forget it anymore?'
    >
      <form
        onSubmit={handleSubmit(submitForm)}
        className='flex w-full flex-col gap-4'
      >
        <div>
          <label htmlFor='title' className='mb-2 block font-bold text-gray-700'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-gray-700 shadow focus:outline-none'
            {...register('title')}
          />
        </div>
        <div>
          <label
            htmlFor='headline'
            className='mb-2 block font-bold text-gray-700'
          >
            Headline
          </label>
          <input
            type='text'
            id='headline'
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-gray-700 shadow focus:outline-none'
            {...register('headline', { required: false })}
          />
        </div>
        <div>
          <label
            htmlFor='description'
            className='mb-2 block font-bold text-gray-700'
          >
            Description
          </label>
          <textarea
            id='description'
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-gray-700 shadow focus:outline-none'
            rows={4}
            {...register('description')}
          ></textarea>
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
    </DefaultLayout>
  )
}
export default New

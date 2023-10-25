import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import DefaultLayout from '../layouts/DefaultLayout'
import { createMoment } from '../store/momentsSlice'
import { Moment } from '../types/Moment'

const New = () => {
  // const createMoment = useCreateMoment()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const moment = {
    title: '',
    headline: '',
    description: '',
    isFavorite: false,
  }

  return (
    <DefaultLayout
      title='New moment'
      description='Wanna create a new moment to never forget it anymore?'
    >
      <MomentForm
        moment={moment}
        submitForm={async (moment: Moment) => {
          // @ts-ignore
          dispatch(createMoment(moment))
          toast.success('New moment created successfully!')
          navigate('/')
        }}
      ></MomentForm>
    </DefaultLayout>
  )
}
export default New

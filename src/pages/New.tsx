import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import DefaultLayout from '../layouts/DefaultLayout'
import { useCreateMomentMutation } from '../store/moments'
import { Moment } from '../types/Moment'

const New = () => {
  const navigate = useNavigate()
  const [createMoment] = useCreateMomentMutation()
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
          createMoment(moment)
          toast.success('New moment created successfully!')
          navigate('/')
        }}
      ></MomentForm>
    </DefaultLayout>
  )
}
export default New

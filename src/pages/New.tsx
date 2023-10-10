import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import { useCreateMoment } from '../hooks/useMoment'
import DefaultLayout from '../layouts/DefaultLayout'
import { Moment } from '../types/Moment'

const New = () => {
  const createMoment = useCreateMoment()
  const navigate = useNavigate()
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
          await createMoment.mutateAsync(moment)
          toast.success('New moment created successfully!')
          navigate('/')
        }}
      ></MomentForm>
    </DefaultLayout>
  )
}
export default New

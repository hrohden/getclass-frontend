import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import DefaultLayout from '../layouts/DefaultLayout'
import {
  useGetMomentByIdQuery,
  useUpdateMomentMutation,
} from '../store/apiSlice'
import { Moment } from '../types/Moment'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useGetMomentByIdQuery(id!)
  const [updateMoment] = useUpdateMomentMutation()

  return (
    <DefaultLayout
      title='Edit moment'
      description='Wanna create a new moment to never forget it anymore?'
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <MomentForm
          moment={data!}
          submitForm={async (moment: Moment) => {
            updateMoment(moment)
            toast.success('Moment changed successfully!')
            navigate('/all')
          }}
        ></MomentForm>
      )}
    </DefaultLayout>
  )
}
export default Edit

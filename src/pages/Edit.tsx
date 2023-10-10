import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import { useGetMoment, useUpdateMoment } from '../hooks/useMoment'
import DefaultLayout from '../layouts/DefaultLayout'
import { Moment } from '../types/Moment'

const Edit = () => {
  const updateMoment = useUpdateMoment()
  const { id } = useParams()
  const { data, isLoading } = useGetMoment(id!)
  const navigate = useNavigate()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <DefaultLayout
      title='Edit moment'
      description='Wanna create a new moment to never forget it anymore?'
    >
      <MomentForm
        moment={data!}
        submitForm={async (moment: Moment) => {
          await updateMoment.mutateAsync(moment)
          toast.success('Moment changed successfully!')
          navigate('/')
        }}
      ></MomentForm>
    </DefaultLayout>
  )
}
export default Edit

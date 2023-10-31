import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import DefaultLayout from '../layouts/DefaultLayout'
import { useGetMomentByIdQuery } from '../store/apiSlice'
import { updateMomentThunk } from '../store/momentsSlice'
import { Moment } from '../types/Moment'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useGetMomentByIdQuery(id!)

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
            // @ts-ignore
            dispatch(updateMomentThunk(moment))
            toast.success('Moment changed successfully!')
            navigate('/all')
          }}
        ></MomentForm>
      )}
    </DefaultLayout>
  )
}
export default Edit

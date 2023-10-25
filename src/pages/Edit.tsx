import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import DefaultLayout from '../layouts/DefaultLayout'
import { selectMomentByIdThunk } from '../store/momentSlice'
import { updateMomentThunk } from '../store/momentsSlice'
import { AppStore } from '../types/AppStore'
import { Moment } from '../types/Moment'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(selectMomentByIdThunk(id))
  }, [])

  const { data, status } = useSelector((state: AppStore) => state.moment)

  return (
    <DefaultLayout
      title='Edit moment'
      description='Wanna create a new moment to never forget it anymore?'
    >
      {status === 'loading' ? (
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

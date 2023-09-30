import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import { useGetMoments } from '../hooks/useMoment'
import DefaultLayout from '../layouts/DefaultLayout'
import { Moment } from '../types/Moment'

const Edit = () => {
  const { id } = useParams()
  const [moment, setMoment] = useState<Moment>()
  const getMoments = useGetMoments()
  useEffect(() => {
    setMoment(getMoments.data?.find(m => m.id === id))
  }, [])
  return (
    <DefaultLayout
      title='Edit moment'
      description='Change your moment information here.'
    >
      <MomentForm moment={moment!} />
    </DefaultLayout>
  )
}
export default Edit

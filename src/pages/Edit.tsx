import { useParams } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import { useGetMoment } from '../hooks/useMoment'
import DefaultLayout from '../layouts/DefaultLayout'

const Edit = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetMoment(id!)

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <DefaultLayout
      title='New moment'
      description='Wanna create a new moment to never forget it anymore?'
    >
      <MomentForm moment={data!}></MomentForm>
    </DefaultLayout>
  )
}
export default Edit

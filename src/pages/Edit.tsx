import { useParams } from 'react-router-dom'
import MomentForm from '../components/MomentForm'
import { useGetMoment, useUpdateMoment } from '../hooks/useMoment'
import DefaultLayout from '../layouts/DefaultLayout'
import { Moment } from '../types/Moment'

const Edit = () => {
  const updateMoment = useUpdateMoment()
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
      <MomentForm
        moment={data!}
        submitForm={async (moment: Moment) => {
          updateMoment.mutateAsync(moment)
        }}
      ></MomentForm>
    </DefaultLayout>
  )
}
export default Edit

import MomentForm from '../components/MomentForm'
import { useCreateMoment } from '../hooks/useMoment'
import DefaultLayout from '../layouts/DefaultLayout'
import { Moment } from '../types/Moment'

const New = () => {
  const createMoment = useCreateMoment()
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
        }}
      ></MomentForm>
    </DefaultLayout>
  )
}
export default New

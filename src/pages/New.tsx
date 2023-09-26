import { v4 as uuidv4 } from 'uuid'
import MomentForm from '../components/MomentForm'
import DefaultLayout from '../layouts/DefaultLayout'

const New = () => {
  const moment = {
    title: '',
    headline: '',
    description: '',
    isFavorite: false,
    id: uuidv4(),
  }

  return (
    <DefaultLayout
      title='New moment'
      description='Wanna create a new moment to never forget it anymore?'
    >
      <MomentForm moment={moment}></MomentForm>
    </DefaultLayout>
  )
}
export default New

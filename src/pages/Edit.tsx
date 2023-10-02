import MomentForm from '../components/MomentForm'
import DefaultLayout from '../layouts/DefaultLayout'

const Edit = () => {
  const moment = {
    title: 'Edit moment',
    headline: 'Edit moment',
    description: 'Edit moment',
    isFavorite: false,
  }
  return (
    <DefaultLayout
      title='Edit moment'
      description='Change your moment information here.'
    >
      <MomentForm moment={moment} />
    </DefaultLayout>
  )
}
export default Edit

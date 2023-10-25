import TableMoments from '../components/TableMoments'
import DefaultLayout from '../layouts/DefaultLayout'
import fakeMoments from '../store/fakeMoments'

const AllMoments = () => {
  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      <TableMoments moments={fakeMoments} />
    </DefaultLayout>
  )
}
export default AllMoments

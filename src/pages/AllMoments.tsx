import TableMoments from '../components/TableMoments'
import DefaultLayout from '../layouts/DefaultLayout'
import { useGetMomentsQuery } from '../store/apiSlice'

const AllMoments = () => {
  const { data, isLoading } = useGetMomentsQuery({})

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {isLoading ? <p>Loading...</p> : <TableMoments moments={data} />}
    </DefaultLayout>
  )
}
export default AllMoments

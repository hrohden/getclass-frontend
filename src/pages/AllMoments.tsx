import { useSelector } from 'react-redux'
import NoMomentsToDisplayAlert from '../components/NoMomentsToDisplayAlert'
import TableMoments from '../components/TableMoments'
import DefaultLayout from '../layouts/DefaultLayout'

const AllMoments = () => {
  const { data, isLoading, error } = useSelector(({ moments }) => moments)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {data?.length === 0 ? (
        <NoMomentsToDisplayAlert />
      ) : (
        <TableMoments moments={data} />
      )}
    </DefaultLayout>
  )
}
export default AllMoments

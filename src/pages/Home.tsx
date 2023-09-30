import TableMoments from '../components/TableMoments'
import { useGetMoments } from '../hooks/useMoment'
import DefaultLayout from '../layouts/DefaultLayout'

const Home = () => {
  const { data, isLoading, error } = useGetMoments()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {data?.length === 0 && <p>Currently, there are no moments to display</p>}

      <TableMoments moments={data} />
    </DefaultLayout>
  )
}
export default Home

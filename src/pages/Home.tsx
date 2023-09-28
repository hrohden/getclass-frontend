import { useContext } from 'react'
import { useQuery } from 'react-query'
import TableMoments from '../components/TableMoments'
import DefaultLayout from '../layouts/DefaultLayout'
import MomentsContext from '../store/momentsContext'

const Home = () => {
  const { moments } = useContext(MomentsContext)
  const { isLoading, error, data } = useQuery({
    queryFn: async () => {
      const res = await fetch('/api/moments')
      return await res.json()
    },
  })

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred.</p>

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {moments.length === 0 && (
        <p>Currently, there are no moments to display</p>
      )}

      <TableMoments moments={moments} />
    </DefaultLayout>
  )
}
export default Home

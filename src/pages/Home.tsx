import { useContext } from 'react'
import TableMoments from '../components/TableMoments'
import DefaultLayout from '../layouts/DefaultLayout'
import MomentsContext from '../store/momentsContext'

const Home = () => {
  const { moments } = useContext(MomentsContext)

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

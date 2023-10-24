import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableMoments from '../components/TableMoments'
import DefaultLayout from '../layouts/DefaultLayout'
import { fetchMoments } from '../store/momentsSlice'
import { AppStore } from '../types/AppStore'

const AllMoments = () => {
  const status = useSelector((state: AppStore) => state.moments.status)
  const dispatch = useDispatch()
  const data = useSelector((state: AppStore) => state.moments.data)

  useEffect(() => {
    if (status === 'idle') {
      // @ts-ignore
      dispatch(fetchMoments())
    }
  }, [status, data])

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <TableMoments moments={data} />}
    </DefaultLayout>
  )
}
export default AllMoments

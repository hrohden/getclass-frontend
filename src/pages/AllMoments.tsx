import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableMoments from '../components/TableMoments'
import DefaultLayout from '../layouts/DefaultLayout'
import { fetchMoments } from '../store/momentsSlice'
import { AppStore } from '../types/AppStore'

const AllMoments = () => {
  const isLoading = useSelector((state: AppStore) => state.moments.isLoading)
  const dispatch = useDispatch()
  const data = useSelector((state: AppStore) => state.moments.data)

  useEffect(() => {
    if (isLoading === 'idle') {
      // @ts-ignore
      dispatch(fetchMoments())
    }
  }, [isLoading, data])

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {isLoading === 'loading' && <p>Loading...</p>}
      {isLoading === 'succeeded' && <TableMoments moments={data} />}
    </DefaultLayout>
  )
}
export default AllMoments

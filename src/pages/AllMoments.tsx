import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableMoments from '../components/TableMoments'
import DefaultLayout from '../layouts/DefaultLayout'
import { fetchMoments } from '../store/momentsSlice'
import { AppStore } from '../types/AppStore'

const AllMoments = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMoments())
  }, [])

  const { data, status } = useSelector((state: AppStore) => state.moments)

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {status === 'loading' || status === 'idle' ? (
        <p>Loading...</p>
      ) : (
        <TableMoments moments={data} />
      )}
    </DefaultLayout>
  )
}
export default AllMoments

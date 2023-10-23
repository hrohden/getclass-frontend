import { Button } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../layouts/DefaultLayout'
import { clean, getData } from '../store/momentsSlice'
import { AppStore } from '../types/AppStore'
import { Loadable } from '../types/Loadable'
import { Moment } from '../types/Moment'

const Favorites = () => {
  const selector = useSelector<AppStore, Loadable<Moment[]>>(
    state => state.moments,
  )
  const dispatch = useDispatch()

  const handleGetData = () => {
    // @ts-ignore
    dispatch(getData())
  }

  const handleCleanData = () => {
    dispatch(clean([]))
  }
  return (
    <DefaultLayout
      title='Favorites'
      description='Keep track of the most favorites moments of my life'
    >
      <p>{selector.data?.length}</p>
      <Button onClick={handleGetData}>Get async data from API</Button>
      <Button onClick={handleCleanData}>Clean data</Button>
    </DefaultLayout>
  )
}
export default Favorites

import { useQuery } from 'react-query'
import { getMoments } from '../api/moment'

const key = 'moments'

const useGetMoments = () => {
  return useQuery(key, getMoments)
}

export default useGetMoments

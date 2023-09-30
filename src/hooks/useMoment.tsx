import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getMoments, postMoment } from '../api/moment'
import { Moment } from '../types/Moment'

const key = 'moments'

const useGetMoments = () => {
  return useQuery([key], getMoments)
}

const useCreateMoment = () => {
  const queryClient = useQueryClient()
  return useMutation(postMoment, {
    onSuccess: (moment: Moment) => {
      queryClient.setQueryData([key], (old: Moment[] | undefined) => {
        return old ? [...old, moment] : [moment]
      })
      queryClient.invalidateQueries([key])
    },
  })
}

export { useCreateMoment, useGetMoments }

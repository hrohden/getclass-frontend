import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteMoment, getMoments, postMoment } from '../api/moment'
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

// hook to delete a moment
const useDeleteMoment = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteMoment, {
    onSuccess: (id: string) => {
      queryClient.setQueryData([key], (old: Moment[] | undefined) => {
        return old ? old.filter(m => m.id !== id) : []
      })
      queryClient.invalidateQueries([key])
    },
  })
}

export { useCreateMoment, useDeleteMoment, useGetMoments }


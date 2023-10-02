import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
  deleteMoment,
  getMomentById,
  getMoments,
  postMoment,
} from '../api/moment'
import { Moment } from '../types/Moment'

const useGetMoments = () => {
  return useQuery(['moments'], getMoments)
}

const useGetMoment = (id: string) => {
  return useQuery(['moment', id], () => getMomentById(id))
}

const useCreateMoment = () => {
  const queryClient = useQueryClient()
  return useMutation(postMoment, {
    onSuccess: (moment: Moment) => {
      queryClient.setQueryData(['moments'], (old: Moment[] | undefined) => {
        return old ? [...old, moment] : [moment]
      })
      queryClient.invalidateQueries(['moments'])
    },
  })
}

// hook to delete a moment
const useDeleteMoment = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteMoment, {
    onSuccess: (id: string) => {
      queryClient.setQueryData(['moments'], (old: Moment[] | undefined) => {
        return old ? old.filter(m => m.id !== id) : []
      })
      queryClient.invalidateQueries(['moments'])
    },
  })
}

export { useCreateMoment, useDeleteMoment, useGetMoment, useGetMoments }


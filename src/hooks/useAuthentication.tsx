import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteAuthentication, postAuthentication } from '../api/authentication'

// defines the local storage key
const AUTHENTICATION_KEY = 'authentication'

// hook function to post authentication
const usePostAuthentication = () => {
  const queryClient = useQueryClient()
  return useMutation(postAuthentication, {
    onSuccess: (authenticationToken: AuthenticationToken) => {
      localStorage.setItem(
        AUTHENTICATION_KEY,
        JSON.stringify(authenticationToken),
      )
      queryClient.setQueryData(AUTHENTICATION_KEY, authenticationToken)
      queryClient.invalidateQueries(AUTHENTICATION_KEY)
    },
  })
}

// hook function to check for authentication
const useGetAuthentication = () => {
  return useQuery(AUTHENTICATION_KEY, () => {
    const authenticationToken = localStorage.getItem(AUTHENTICATION_KEY)
    if (authenticationToken) {
      return JSON.parse(authenticationToken)
    }
    return null
  })
}

// hook function to remove authentication
const useDeleteAuthentication = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteAuthentication, {
    onSuccess: () => {
      localStorage.removeItem(AUTHENTICATION_KEY)
      queryClient.setQueryData(AUTHENTICATION_KEY, null)
      queryClient.invalidateQueries(AUTHENTICATION_KEY)
    },
  })
}

export { useDeleteAuthentication, useGetAuthentication, usePostAuthentication }

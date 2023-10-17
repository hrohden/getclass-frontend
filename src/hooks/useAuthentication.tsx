import { useMutation, useQueryClient } from 'react-query'
import { deleteAuthentication, postAuthentication } from '../api/authentication'

// defines the local storage key
const AUTHENTICATION_KEY = 'authentication'

// hook function to post authentication
const usePostAuthentication = () => {
  const queryClient = useQueryClient()
  return useMutation(postAuthentication, {
    onSuccess: (authenticationToken: AuthenticationToken) => {
      queryClient.setQueryData('authentication', authenticationToken)
      localStorage.setItem(
        AUTHENTICATION_KEY,
        JSON.stringify(authenticationToken),
      )
    },
  })
}

// hook function to check for authentication
const useAuthentication = (): AuthenticationToken | undefined => {
  return JSON.parse(localStorage.getItem(AUTHENTICATION_KEY) || 'null')
}

// hook function to remove authentication
const useDeleteAuthentication = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteAuthentication, {
    onSuccess: () => {
      queryClient.setQueryData(AUTHENTICATION_KEY, null)
      localStorage.removeItem(AUTHENTICATION_KEY)
    },
  })
}

export { useAuthentication, useDeleteAuthentication, usePostAuthentication }

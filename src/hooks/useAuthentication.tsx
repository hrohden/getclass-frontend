import { useMutation, useQueryClient } from 'react-query'
import { postAuthentication } from '../api/authentication'

const usePostAuthentication = () => {
  const queryClient = useQueryClient()
  return useMutation(postAuthentication, {
    onSuccess: (authenticationToken: AuthenticationToken) => {
      const queryKeys = ['authentication']
      queryClient.setQueryData(queryKeys, authenticationToken)
      queryClient.invalidateQueries(['authentication'])
    },
  })
}

// hook function to check for authentication
const useAuthentication = (): AuthenticationToken | undefined => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData<AuthenticationToken>('authentication')
}

export { useAuthentication, usePostAuthentication }

import { useMutation } from 'react-query'
import { postAuthentication } from '../api/authentication'

// defines the local storage key
const AUTHENTICATION_KEY = 'authentication'

// hook function to post authentication
const usePostAuthentication = () => {
  return useMutation(postAuthentication, {
    onSuccess: (authenticationToken: AuthenticationToken) => {
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
  return () => {
    localStorage.removeItem(AUTHENTICATION_KEY)
  }
}

export { useAuthentication, useDeleteAuthentication, usePostAuthentication }

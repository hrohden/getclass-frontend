import axios, { AxiosResponse } from 'axios'
import { API_URL_BASE, API_DEFAULT_HEADERS as headers } from './constants'

// post authentication to the backend server
const postAuthentication = async (
  authentication: LoginFormInputs,
): Promise<AxiosResponse<AuthenticationToken, AuthenticationError>> => {
  return axios.request<
    AuthenticationToken,
    AxiosResponse<AuthenticationToken, AuthenticationError>,
    LoginFormInputs
  >({
    method: 'POST',
    url: `${API_URL_BASE}/login`,
    data: authentication,
  })
}

// delete authentication from the backend server
const deleteAuthentication = async (): Promise<void> => {
  const method = 'DELETE'
  await fetch(`${API_URL_BASE}/logout`, {
    method,
    headers,
  })
}

export { deleteAuthentication, postAuthentication }

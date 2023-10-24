import axios from 'axios'
import { API_URL_BASE, API_DEFAULT_HEADERS as headers } from './constants'

// post authentication to the backend server
const postAuthentication = async (
  authentication: LoginFormInputs,
): Promise<Authentication> => {
  const response = await axios.post(`${API_URL_BASE}/login`, authentication)
  return response.data
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

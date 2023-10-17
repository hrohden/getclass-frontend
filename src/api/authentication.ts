import axios from 'axios'

const URL_BASE = '/api'

const headers = {
  'Content-Type': 'application/json',
}

// post authentication to the backend server
const postAuthentication = async (
  authentication: LoginFormInputs,
): Promise<AuthenticationToken> => {
  const response = await axios.post(`${URL_BASE}/login`, authentication)
  return response.data
}

// delete authentication from the backend server
const deleteAuthentication = async (): Promise<void> => {
  const method = 'DELETE'
  await fetch(`${URL_BASE}/logout`, {
    method,
    headers,
  })
}

export { deleteAuthentication, postAuthentication }

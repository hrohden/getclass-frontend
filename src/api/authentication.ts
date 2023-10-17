const URL_BASE = '/api'

const headers = {
  'Content-Type': 'application/json',
}

// post authentication to the backend server
const postAuthentication = async (
  authentication: LoginFormInputs,
): Promise<AuthenticationToken> => {
  const body = JSON.stringify(authentication)
  const method = 'POST'
  const response = await fetch(`${URL_BASE}/login`, {
    method,
    headers,
    body,
  })
  return response.json()
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


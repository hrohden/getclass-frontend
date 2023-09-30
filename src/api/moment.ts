import { Moment } from '../types/Moment'

const URL_BASE = '/api'

const headers = {
  'Content-Type': 'application/json',
}

const getMoments = async (): Promise<Moment[]> => {
  const response = await fetch(`${URL_BASE}/moments`)
  return response.json()
}

// post moment to backend server
const postMoment = async (moment: Moment): Promise<Moment> => {
  const body = JSON.stringify(moment)
  const method = 'POST'
  const response = await fetch(`${URL_BASE}/moments`, {
    method,
    headers,
    body,
  })
  return response.json()
}

export { getMoments, postMoment }

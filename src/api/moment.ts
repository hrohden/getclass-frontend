import { Moment } from '../types/Moment'

const URL_BASE = '/api'

const headers = {
  'Content-Type': 'application/json',
}

// get all moments
const getMoments = async (): Promise<Moment[]> => {
  const response = await fetch(`${URL_BASE}/moments`)
  return response.json()
}

// get moment by id
const getMomentById = async (id: string): Promise<Moment> => {
  const response = await fetch(`${URL_BASE}/moments/${id}`)
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

// put moment to backend server
const patchMoment = async (moment: Moment): Promise<Moment> => {
  const body = JSON.stringify(moment)
  const method = 'PATCH'
  const response = await fetch(`${URL_BASE}/moments/${moment.id}`, {
    method,
    headers,
    body,
  })
  return response.json()
}

// delete moment from backend server
const deleteMoment = async (id: string): Promise<string> => {
  const method = 'DELETE'
  await fetch(`${URL_BASE}/moments/${id}`, {
    method,
    headers,
  })
  return id
}

export { deleteMoment, getMomentById, getMoments, patchMoment, postMoment }


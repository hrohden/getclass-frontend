import axios from 'axios'
import { Moment } from '../types/Moment'

const URL_BASE = '/api'

const headers = {
  'Content-Type': 'application/json',
}

// get all moments
const getMoments = async (): Promise<Moment[]> => {
  const response = await axios.get(`${URL_BASE}/moments`, { headers })
  return response.data
}

// get moment by id
const getMomentById = async (id: string): Promise<Moment> => {
  const response = await axios.get(`${URL_BASE}/moments/${id}`, { headers })
  return response.data
}

// post moment to backend server
const postMoment = async (moment: Moment): Promise<Moment> => {
  const response = await axios.post(`${URL_BASE}/moments`, moment)
  return response.data
}

// put moment to backend server
const patchMoment = async (moment: Moment): Promise<Moment> => {
  // const data = JSON.stringify(moment)
  const response = await axios.patch(`${URL_BASE}/moments/${moment.id}`, moment)
  return response.data
}

// delete moment from backend server
const deleteMoment = async (id: string): Promise<string> => {
  await axios.delete(`${URL_BASE}/moments/${id}`, { headers })
  return id
}

export { deleteMoment, getMomentById, getMoments, patchMoment, postMoment }

import axios from 'axios'
import { Moment } from '../types/Moment'
import { API_URL_BASE, API_DEFAULT_HEADERS as headers } from './constants'

const resolvedPath = `${API_URL_BASE}/moments`

// get all moments
const getMoments = async (): Promise<Moment[]> => {
  const response = await axios.get(resolvedPath, { headers })
  return response.data
}

// get moment by id
const getMomentById = async (id: string): Promise<Moment> => {
  const response = await axios.get(`${resolvedPath}/${id}`, { headers })
  return response.data
}

// post moment to backend server
const postMoment = async (moment: Moment): Promise<Moment> => {
  const response = await axios.post(resolvedPath, moment)
  return response.data
}

// put moment to backend server
const patchMoment = async (moment: Moment): Promise<Moment> => {
  // const data = JSON.stringify(moment)
  const response = await axios.patch(`${resolvedPath}/${moment.id}`, moment)
  return response.data
}

// delete moment from backend server
const deleteMoment = async (id: string): Promise<string> => {
  await axios.delete(`${resolvedPath}/${id}`, { headers })
  return id
}

export { deleteMoment, getMomentById, getMoments, patchMoment, postMoment }

import { Moment } from '../types/Moment'

const URL_BASE = '/api'

const getMoments = async (): Promise<Moment[]> => {
  const response = await fetch(`${URL_BASE}/moments`)
  return response.json()
}

export { getMoments }

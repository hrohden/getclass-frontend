import { createContext } from 'react'
import { Moment } from '../types/Moment'

const initialState: {
  moments: Moment[]
  addMoment: (moment: Moment) => void
  deleteMoment: (moment: Moment) => void
} = {
  moments: [],
  addMoment: () => {},
  deleteMoment: () => {},
}

const MomentsContext = createContext(initialState)

export default MomentsContext

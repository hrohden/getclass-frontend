import { createContext } from 'react'
import { Moment } from '../types/Moment'

const initialState: {
  moments: Moment[]
} = {
  moments: [],
}

const MomentsContext = createContext(initialState)

export default MomentsContext

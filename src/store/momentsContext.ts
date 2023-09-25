import { createContext } from 'react'
import { Moment } from '../types/Moment'

const MomentsContext = createContext<Moment[]>([])

export default MomentsContext

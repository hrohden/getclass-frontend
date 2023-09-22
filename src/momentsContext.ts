import { createContext } from 'react'
import { Moment } from './Moment'

const MomentsContext = createContext<Moment[]>([])

export default MomentsContext

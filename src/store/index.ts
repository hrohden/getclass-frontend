import { configureStore } from '@reduxjs/toolkit'
import identitySlice from './identitySlice'
import momentSlice from './momentSlice'
import momentsSlice from './momentsSlice'

const store = configureStore({
  reducer: {
    moments: momentsSlice,
    moment: momentSlice,
    identity: identitySlice,
  },
})

export default store

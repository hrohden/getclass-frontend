import { configureStore } from '@reduxjs/toolkit'
import momentSlice from './momentSlice'
import momentsSlice from './momentsSlice'

const store = configureStore({
  reducer: {
    moments: momentsSlice,
    moment: momentSlice,
  },
})

export default store

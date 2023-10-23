import { configureStore } from '@reduxjs/toolkit'
import momentsSlice from './momentsSlice'

const store = configureStore({
  reducer: {
    moments: momentsSlice,
  },
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import identitySlice from './identitySlice'
import momentsSlice from './momentsSlice'

const store = configureStore({
  reducer: {
    moments: momentsSlice,
    identity: identitySlice,
  },
})

export default store

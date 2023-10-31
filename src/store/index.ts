import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { momentsApi } from './apiSlice'
import momentSlice from './momentSlice'
import momentsSlice from './momentsSlice'

const store = configureStore({
  reducer: {
    moments: momentsSlice,
    moment: momentSlice,
    [momentsApi.reducerPath]: momentsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(momentsApi.middleware),
})

setupListeners(store.dispatch)

export default store

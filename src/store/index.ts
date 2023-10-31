import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { moments } from './moments'

const store = configureStore({
  reducer: {
    [moments.reducerPath]: moments.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moments.middleware),
})

setupListeners(store.dispatch)

export default store

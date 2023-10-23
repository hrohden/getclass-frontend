import { SliceCaseReducers, createSlice } from '@reduxjs/toolkit'
import { Moment } from '../types/Moment'

const momentsSlice = createSlice<Moment[], SliceCaseReducers<Moment[]>>({
  name: 'moments',
  initialState: [],
  reducers: {
    add: (prevState, { payload }) => {
      const newState = [...prevState, payload]
      return newState
    },
    addAll: (_prevState, { payload }) => {
      return payload
    },
    clean: () => {
      return []
    },
  },
})

export const { add, clean, addAll } = momentsSlice.actions
export default momentsSlice.reducer

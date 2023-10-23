import {
  AnyAction,
  Dispatch,
  SliceCaseReducers,
  createSlice,
} from '@reduxjs/toolkit'
import { getMoments } from '../api/moment'
import { Moment } from '../types/Moment'

const momentsSlice = createSlice<Moment[], SliceCaseReducers<Moment[]>>({
  name: 'moments',
  initialState: [],
  reducers: {
    add: (prevState, { payload }) => {
      const newState = [...prevState, payload]
      return newState
    },
    set: (_prevState, { payload }) => {
      return payload
    },
    clean: () => {
      return []
    },
  },
})

export const getData = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      // make an async call in the thunk
      const moments = await getMoments()
      // dispatch an action when we get the response back
      dispatch(set(moments))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}

export const { add, clean, set } = momentsSlice.actions
export default momentsSlice.reducer

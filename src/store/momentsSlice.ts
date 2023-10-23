import {
  AnyAction,
  Dispatch,
  SliceCaseReducers,
  createSlice,
} from '@reduxjs/toolkit'
import { getMoments } from '../api/moment'
import { Loadable } from '../types/Loadable'
import { Moment } from '../types/Moment'

const initialState: Loadable<Moment[]> = {
  data: [],
  isLoading: false,
}

const momentsSlice = createSlice<
  Loadable<Moment[]>,
  SliceCaseReducers<Loadable<Moment[]>>
>({
  name: 'moments',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.data?.push(payload)
    },
    set: (_prevState, { payload }) => {
      return {
        data: payload,
        isLoading: false,
      }
    },
    clean: () => {
      return initialState
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

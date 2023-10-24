import {
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { getMoments } from '../api/moment'
import { Loadable } from '../types/Loadable'
import { Moment } from '../types/Moment'

const initialState: Loadable<Moment[]> = {
  data: [],
  status: 'idle',
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
        status: 'succeeded',
      }
    },
    clean: () => {
      return initialState
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMoments.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(fetchMoments.fulfilled, (state, { payload }) => {
      state.data = payload
      state.status = 'succeeded'
    })
    builder.addCase(fetchMoments.rejected, state => {
      state.status = 'failed'
    })
  },
})

export const fetchMoments = createAsyncThunk('moments/set', async () => {
  const response = await getMoments()
  return response
})

export const { add, clean, set } = momentsSlice.actions
export default momentsSlice.reducer

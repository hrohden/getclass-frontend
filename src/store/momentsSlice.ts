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
  isLoading: 'idle',
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
        isLoading: 'succeeded',
      }
    },
    clean: () => {
      return initialState
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMoments.pending, state => {
      state.isLoading = 'idle'
    })
    builder.addCase(fetchMoments.fulfilled, (state, { payload }) => {
      state.data = payload
      state.isLoading = 'succeeded'
    })
    builder.addCase(fetchMoments.rejected, state => {
      state.isLoading = 'failed'
    })
  },
})

export const fetchMoments = createAsyncThunk('moments/set', async () => {
  const response = await getMoments()
  return response
})

export const { add, clean, set } = momentsSlice.actions
export default momentsSlice.reducer
